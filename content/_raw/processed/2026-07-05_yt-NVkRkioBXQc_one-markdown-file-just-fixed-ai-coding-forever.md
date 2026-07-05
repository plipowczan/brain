---
video_id: NVkRkioBXQc
source_url: https://www.youtube.com/watch?v=NVkRkioBXQc
title: "One markdown file just fixed AI coding forever."
channel: "Agent Zero"
uploader_id: "@AgentZeroFW"
duration: 1148
duration_human: "19:08"
published: 2026-06-08
language: en-US
transcription: captions
chapters:
  []
tags: ["dox", "markdown", "agents", "coding", "zero", "codex", "claude", "code"]
categories: ["Science & Technology"]
fetched: 2026-07-05T09:54:50Z
---

# One markdown file just fixed AI coding forever.

[0:02] Welcome. Today I'm about to show you how
[0:02] Welcome. Today I'm about to show you how you can leverage a single small
[0:03] you can leverage a single small
[0:03] you can leverage a single small marground file to fix your AI coding
[0:07] marground file to fix your AI coding
[0:07] marground file to fix your AI coding agent's biggest issue ever. My name is
[0:09] agent's biggest issue ever. My name is
[0:09] agent's biggest issue ever. My name is Yan. I'm the developer of Agent Zero and
[0:12] Yan. I'm the developer of Agent Zero and
[0:12] Yan. I'm the developer of Agent Zero and Space Agent. And today I will show you
[0:14] Space Agent. And today I will show you
[0:14] Space Agent. And today I will show you how to properly use Docs. It is
[0:17] how to properly use Docs. It is
[0:17] how to properly use Docs. It is extremely simple. No installation, no
[0:19] extremely simple. No installation, no
[0:19] extremely simple. No installation, no requirements. And the best part is that
[0:21] requirements. And the best part is that
[0:21] requirements. And the best part is that it actually fixes the issue. So now what
[0:24] it actually fixes the issue. So now what
[0:24] it actually fixes the issue. So now what is the issue? obviously is the
[0:27] is the issue? obviously is the
[0:27] is the issue? obviously is the reliability of coding AI agents and we
[0:30] reliability of coding AI agents and we
[0:30] reliability of coding AI agents and we all know the symptoms. You give your AI
[0:31] all know the symptoms. You give your AI
[0:31] all know the symptoms. You give your AI agent the task. It will do the task but
[0:35] agent the task. It will do the task but
[0:35] agent the task. It will do the task but in a wrong place breaking your
[0:37] in a wrong place breaking your
[0:37] in a wrong place breaking your conventions duplicating functionality
[0:39] conventions duplicating functionality
[0:39] conventions duplicating functionality instead of extending a function that
[0:41] instead of extending a function that
[0:41] instead of extending a function that could have just one line addit. It will
[0:44] could have just one line addit. It will
[0:44] could have just one line addit. It will create a brand new helper module etc.
[0:46] create a brand new helper module etc.
[0:46] create a brand new helper module etc. Your codebase will bloat and this makes
[0:50] Your codebase will bloat and this makes
[0:50] Your codebase will bloat and this makes things even worse for the future. And
[0:52] things even worse for the future. And
[0:52] things even worse for the future. And you know how this ends right? never-
[0:54] you know how this ends right? never-
[0:54] you know how this ends right? never- ending cycles of debugging, fixing one
[0:56] ending cycles of debugging, fixing one
[0:56] ending cycles of debugging, fixing one thing breaks another, your agent is
[0:58] thing breaks another, your agent is
[0:58] thing breaks another, your agent is confused from all the code, etc. So now
[1:01] confused from all the code, etc. So now
[1:01] confused from all the code, etc. So now I will show you what docs actually is,
[1:04] I will show you what docs actually is,
[1:04] I will show you what docs actually is, why is it so simple and why it works so
[1:07] why is it so simple and why it works so
[1:07] why is it so simple and why it works so well, why did we develop it and how can
[1:11] well, why did we develop it and how can
[1:11] well, why did we develop it and how can you use it in your project. So first we
[1:14] you use it in your project. So first we
[1:14] you use it in your project. So first we need to identify what is the real
[1:16] need to identify what is the real
[1:16] need to identify what is the real problem here. The issue is not
[1:18] problem here. The issue is not
[1:18] problem here. The issue is not intelligence, it's context awareness.
[1:21] intelligence, it's context awareness.
[1:21] intelligence, it's context awareness. Because your agent is already smart
[1:24] Because your agent is already smart
[1:24] Because your agent is already smart enough, your LLM is smart enough to do
[1:26] enough, your LLM is smart enough to do
[1:26] enough, your LLM is smart enough to do any programming work better than you
[1:28] any programming work better than you
[1:28] any programming work better than you can. But where it fails is maintaining
[1:32] can. But where it fails is maintaining
[1:32] can. But where it fails is maintaining large code bases because it doesn't see
[1:35] large code bases because it doesn't see
[1:35] large code bases because it doesn't see behind the corner. It does not know the
[1:37] behind the corner. It does not know the
[1:37] behind the corner. It does not know the context of your full codebase. And
[1:39] context of your full codebase. And
[1:39] context of your full codebase. And that's why it makes these simple
[1:42] that's why it makes these simple
[1:42] that's why it makes these simple mistakes because it simply cannot see
[1:45] mistakes because it simply cannot see
[1:45] mistakes because it simply cannot see the big picture. and throwing more
[1:47] the big picture. and throwing more
[1:47] the big picture. and throwing more tokens at it. That's not a solution. The
[1:50] tokens at it. That's not a solution. The
[1:50] tokens at it. That's not a solution. The question is not how do we give it more
[1:53] question is not how do we give it more
[1:53] question is not how do we give it more context. The question is how do we give
[1:55] context. The question is how do we give
[1:55] context. The question is how do we give it exactly the right amount of context
[1:58] it exactly the right amount of context
[1:58] it exactly the right amount of context it needs. Not more, not less, minimum
[2:01] it needs. Not more, not less, minimum
[2:01] it needs. Not more, not less, minimum context required to make the minimal
[2:03] context required to make the minimal
[2:04] context required to make the minimal edit and that's it.
[2:07] edit and that's it.
[2:07] edit and that's it. Now to understand why did I develop
[2:09] Now to understand why did I develop
[2:09] Now to understand why did I develop docs, we need to take a look at space
[2:11] docs, we need to take a look at space
[2:11] docs, we need to take a look at space agent because this is where it started.
[2:14] agent because this is where it started.
[2:14] agent because this is where it started. Space Agent, if you don't know what it
[2:17] Space Agent, if you don't know what it
[2:17] Space Agent, if you don't know what it is, it's an AI agent that runs
[2:20] is, it's an AI agent that runs
[2:20] is, it's an AI agent that runs completely in the browser runtime. It
[2:23] completely in the browser runtime. It
[2:23] completely in the browser runtime. It can execute code. It can generate its
[2:26] can execute code. It can generate its
[2:26] can execute code. It can generate its own UIs on the fly. It can communicate
[2:29] own UIs on the fly. It can communicate
[2:29] own UIs on the fly. It can communicate to external services. You tell it to
[2:32] to external services. You tell it to
[2:32] to external services. You tell it to build you something, it will build it on
[2:34] build you something, it will build it on
[2:34] build you something, it will build it on the fly right away in the browser. And
[2:36] the fly right away in the browser. And
[2:36] the fly right away in the browser. And it has a ton of advanced features like
[2:39] it has a ton of advanced features like
[2:39] it has a ton of advanced features like uh user management, uh groups. It is
[2:42] uh user management, uh groups. It is
[2:42] uh user management, uh groups. It is extensible in many many ways. It has a
[2:46] extensible in many many ways. It has a
[2:46] extensible in many many ways. It has a large code base, a lot of layers, a lot
[2:48] large code base, a lot of layers, a lot
[2:48] large code base, a lot of layers, a lot of concepts, a lot of cool features like
[2:50] of concepts, a lot of cool features like
[2:50] of concepts, a lot of cool features like the time travel and it was completely
[2:52] the time travel and it was completely
[2:52] the time travel and it was completely developed by AI. I didn't write a single
[2:54] developed by AI. I didn't write a single
[2:54] developed by AI. I didn't write a single line of code on this project. And it
[2:57] line of code on this project. And it
[2:58] line of code on this project. And it took me about 3 weeks to completely
[3:01] took me about 3 weeks to completely
[3:01] took me about 3 weeks to completely develop Polish and publish this. And so
[3:05] develop Polish and publish this. And so
[3:05] develop Polish and publish this. And so since the very beginning, I knew that I
[3:07] since the very beginning, I knew that I
[3:07] since the very beginning, I knew that I cannot be writing code here. It's not
[3:09] cannot be writing code here. It's not
[3:09] cannot be writing code here. It's not possible in 2026. You need to have a
[3:11] possible in 2026. You need to have a
[3:11] possible in 2026. You need to have a team of agents that will do this for
[3:13] team of agents that will do this for
[3:13] team of agents that will do this for you, but you need them to do it reliably
[3:16] you, but you need them to do it reliably
[3:16] you, but you need them to do it reliably and to write good quality code, maintain
[3:19] and to write good quality code, maintain
[3:19] and to write good quality code, maintain uh maintain the right principles and uh
[3:22] uh maintain the right principles and uh
[3:22] uh maintain the right principles and uh best practices etc.
[3:25] best practices etc.
[3:25] best practices etc. And so the very thing I did inside space
[3:29] And so the very thing I did inside space
[3:29] And so the very thing I did inside space agent was creating this agents.md
[3:33] agent was creating this agents.md
[3:33] agent was creating this agents.md file where back then it wasn't called
[3:37] file where back then it wasn't called
[3:37] file where back then it wasn't called docs framework. It was just the first
[3:40] docs framework. It was just the first
[3:40] docs framework. It was just the first prototype of a self-documenting
[3:41] prototype of a self-documenting
[3:42] prototype of a self-documenting framework built specifically for the
[3:44] framework built specifically for the
[3:44] framework built specifically for the space agent project.
[3:46] space agent project.
[3:46] space agent project. But it was mostly what docs framework is
[3:50] But it was mostly what docs framework is
[3:50] But it was mostly what docs framework is now. It explained to this agent to read
[3:54] now. It explained to this agent to read
[3:54] now. It explained to this agent to read documentation before editing,
[3:57] documentation before editing,
[3:58] documentation before editing, update documentation after editing,
[4:00] update documentation after editing,
[4:00] update documentation after editing, maintain the documentation
[4:02] maintain the documentation
[4:02] maintain the documentation in a hierarchy corresponding to the
[4:05] in a hierarchy corresponding to the
[4:05] in a hierarchy corresponding to the codebase
[4:06] codebase
[4:06] codebase and how the documentation should look
[4:09] and how the documentation should look
[4:09] and how the documentation should look like. So like we say here, docs is a
[4:13] like. So like we say here, docs is a
[4:13] like. So like we say here, docs is a self-documenting agents.mmd framework.
[4:17] self-documenting agents.mmd framework.
[4:17] self-documenting agents.mmd framework. The
[4:18] The
[4:18] The big difference here is that it's not a
[4:21] big difference here is that it's not a
[4:21] big difference here is that it's not a single agents.mmd file. It's not a
[4:24] single agents.mmd file. It's not a
[4:24] single agents.mmd file. It's not a documentation that's detached from the
[4:26] documentation that's detached from the
[4:26] documentation that's detached from the codebase somewhere. What we are used to
[4:28] codebase somewhere. What we are used to
[4:28] codebase somewhere. What we are used to a lot of projects have their
[4:29] a lot of projects have their
[4:29] a lot of projects have their documentations in a wiki somewhere or in
[4:33] documentations in a wiki somewhere or in
[4:33] documentations in a wiki somewhere or in separate folder. Here we tightly couple
[4:36] separate folder. Here we tightly couple
[4:36] separate folder. Here we tightly couple the documentation with the codebase. And
[4:39] the documentation with the codebase. And
[4:39] the documentation with the codebase. And I can show it to you here.
[4:49] This is the code base of agent zero for
[4:49] This is the code base of agent zero for example. It's a very large project, very
[4:52] example. It's a very large project, very
[4:52] example. It's a very large project, very large code base, very deep and it all
[4:55] large code base, very deep and it all
[4:55] large code base, very deep and it all starts with the top level agents.mmd
[4:59] starts with the top level agents.mmd
[5:00] starts with the top level agents.mmd file.
[5:01] file.
[5:01] file. Here we have our original agent zero
[5:04] Here we have our original agent zero
[5:04] Here we have our original agent zero instructions and somewhere here starts
[5:07] instructions and somewhere here starts
[5:07] instructions and somewhere here starts the docs framework which is one of the
[5:10] the docs framework which is one of the
[5:10] the docs framework which is one of the beauties of it. You can simply take the
[5:12] beauties of it. You can simply take the
[5:12] beauties of it. You can simply take the markdown from the GitHub repo, copy
[5:15] markdown from the GitHub repo, copy
[5:15] markdown from the GitHub repo, copy paste it into your existing agents.mmd.
[5:17] paste it into your existing agents.mmd.
[5:17] paste it into your existing agents.mmd. It does not mess up your existing
[5:19] It does not mess up your existing
[5:19] It does not mess up your existing instructions. It just adds the
[5:25] instructions. It just adds the
[5:25] instructions. It just adds the let's say responsibility to your agent
[5:27] let's say responsibility to your agent
[5:27] let's say responsibility to your agent for the documentation.
[5:29] for the documentation.
[5:29] for the documentation. Now the agent knows that it needs to
[5:33] Now the agent knows that it needs to
[5:33] Now the agent knows that it needs to crawl the hierarchy of agents.mmd files
[5:36] crawl the hierarchy of agents.mmd files
[5:36] crawl the hierarchy of agents.mmd files because each agents.mmd is created in
[5:40] because each agents.mmd is created in
[5:40] because each agents.mmd is created in every subfolder throughout the codebase
[5:45] every subfolder throughout the codebase
[5:45] every subfolder throughout the codebase except for some temporary files and
[5:47] except for some temporary files and
[5:47] except for some temporary files and garbage etc.
[5:50] garbage etc.
[5:50] garbage etc. And every agents.mmd file is responsible
[5:55] And every agents.mmd file is responsible
[5:55] And every agents.mmd file is responsible for a single domain, a single folder,
[5:57] for a single domain, a single folder,
[5:57] for a single domain, a single folder, but it contains a child docs index. And
[6:01] but it contains a child docs index. And
[6:02] but it contains a child docs index. And we are now in the top level agents.mmd.
[6:05] we are now in the top level agents.mmd.
[6:05] we are now in the top level agents.mmd. And here we have our subfolders agents
[6:07] And here we have our subfolders agents
[6:07] And here we have our subfolders agents API configuration, docker, etc. Each of
[6:10] API configuration, docker, etc. Each of
[6:10] API configuration, docker, etc. Each of these have their own agents.md files
[6:13] these have their own agents.md files
[6:13] these have their own agents.md files inside that document that one specific
[6:16] inside that document that one specific
[6:16] inside that document that one specific domain.
[6:18] domain.
[6:18] domain. And for example in the agents we will
[6:22] And for example in the agents we will
[6:22] And for example in the agents we will once again find child doc index at the
[6:25] once again find child doc index at the
[6:25] once again find child doc index at the end documenting individual agents inside
[6:28] end documenting individual agents inside
[6:28] end documenting individual agents inside of the system. And why this tree
[6:31] of the system. And why this tree
[6:31] of the system. And why this tree structure is so important is that
[6:34] structure is so important is that
[6:34] structure is so important is that this way the agent can always take the
[6:38] this way the agent can always take the
[6:38] this way the agent can always take the fastest most straightforward path to the
[6:42] fastest most straightforward path to the
[6:42] fastest most straightforward path to the place where it needs to make the
[6:44] place where it needs to make the
[6:44] place where it needs to make the changes. So if I tell the agent uh
[6:48] changes. So if I tell the agent uh
[6:48] changes. So if I tell the agent uh create an
[6:51] create an
[6:51] create an API endpoint for me right in the top
[6:55] API endpoint for me right in the top
[6:55] API endpoint for me right in the top agents.mmd file that the agent can see
[6:57] agents.mmd file that the agent can see
[6:57] agents.mmd file that the agent can see at all times it can see that there is a
[7:01] at all times it can see that there is a
[7:01] at all times it can see that there is a documentation for API endpoints here is
[7:04] documentation for API endpoints here is
[7:04] documentation for API endpoints here is a short description http API handlers
[7:06] a short description http API handlers
[7:06] a short description http API handlers and websocket handler entry points the
[7:09] and websocket handler entry points the
[7:09] and websocket handler entry points the agent will open that file read about the
[7:12] agent will open that file read about the
[7:12] agent will open that file read about the purpose ownership local contracts aka
[7:16] purpose ownership local contracts aka
[7:16] purpose ownership local contracts aka rules, work guidance, how to test and
[7:19] rules, work guidance, how to test and
[7:19] rules, work guidance, how to test and verify so the agent can quickly navigate
[7:23] verify so the agent can quickly navigate
[7:23] verify so the agent can quickly navigate to the relevant place, make the minimal
[7:25] to the relevant place, make the minimal
[7:25] to the relevant place, make the minimal edit, and most importantly after any
[7:28] edit, and most importantly after any
[7:28] edit, and most importantly after any edit, update the documentation files,
[7:31] edit, update the documentation files,
[7:31] edit, update the documentation files, which keeps the documentation in sync
[7:34] which keeps the documentation in sync
[7:34] which keeps the documentation in sync with the actual codebase. And I know
[7:37] with the actual codebase. And I know
[7:37] with the actual codebase. And I know this may seem like a simple concept. It
[7:39] this may seem like a simple concept. It
[7:39] this may seem like a simple concept. It actually is. And it may be hard to
[7:41] actually is. And it may be hard to
[7:41] actually is. And it may be hard to believe that this actually brings any
[7:43] believe that this actually brings any
[7:43] believe that this actually brings any real benefits to AI agents. But the
[7:47] real benefits to AI agents. But the
[7:47] real benefits to AI agents. But the difference between the input and output,
[7:51] difference between the input and output,
[7:51] difference between the input and output, what I mean is the size of the addition
[7:54] what I mean is the size of the addition
[7:54] what I mean is the size of the addition to your codebase, no installation
[7:55] to your codebase, no installation
[7:55] to your codebase, no installation required, no manual work, and the output
[7:58] required, no manual work, and the output
[7:58] required, no manual work, and the output in terms of code quality and agent
[8:01] in terms of code quality and agent
[8:01] in terms of code quality and agent efficiency is so disproportional here
[8:04] efficiency is so disproportional here
[8:04] efficiency is so disproportional here that we had to release this as a
[8:07] that we had to release this as a
[8:07] that we had to release this as a standalone product.
[8:09] standalone product.
[8:09] standalone product. I say product but of course it's open
[8:10] I say product but of course it's open
[8:10] I say product but of course it's open source just go and copy paste it and we
[8:14] source just go and copy paste it and we
[8:14] source just go and copy paste it and we can probably best see it on the space
[8:15] can probably best see it on the space
[8:15] can probably best see it on the space agent itself which was completely AI
[8:19] agent itself which was completely AI
[8:19] agent itself which was completely AI coded we can take a look at the top
[8:22] coded we can take a look at the top
[8:22] coded we can take a look at the top level agents MD and it will point us
[8:26] level agents MD and it will point us
[8:26] level agents MD and it will point us to the front- end application commands
[8:28] to the front- end application commands
[8:28] to the front- end application commands packaging server test we can take a look
[8:33] packaging server test we can take a look
[8:33] packaging server test we can take a look into the server documentation for
[8:35] into the server documentation for
[8:36] into the server documentation for example
[8:45] And this will point us further
[8:45] And this will point us further into API endpoints, jobs, library,
[8:51] into API endpoints, jobs, library,
[8:52] into API endpoints, jobs, library, pages, router, runtime. You get the
[8:54] pages, router, runtime. You get the
[8:54] pages, router, runtime. You get the idea. Everything is thoroughly
[8:57] idea. Everything is thoroughly
[8:57] idea. Everything is thoroughly documented. The agent updates all the
[9:00] documented. The agent updates all the
[9:00] documented. The agent updates all the relevant documentation, not just the
[9:02] relevant documentation, not just the
[9:02] relevant documentation, not just the closest agents MD file to where the
[9:05] closest agents MD file to where the
[9:05] closest agents MD file to where the agent does the edits, but also the
[9:07] agent does the edits, but also the
[9:07] agent does the edits, but also the parents if that is relevant. So if we
[9:10] parents if that is relevant. So if we
[9:10] parents if that is relevant. So if we change something about the concept, if I
[9:13] change something about the concept, if I
[9:13] change something about the concept, if I tell the agent that I want him to use
[9:17] tell the agent that I want him to use
[9:17] tell the agent that I want him to use different coding practices, different
[9:19] different coding practices, different
[9:19] different coding practices, different styling, formatting, whatever, it can
[9:22] styling, formatting, whatever, it can
[9:22] styling, formatting, whatever, it can update this in the parents files
[9:24] update this in the parents files
[9:24] update this in the parents files agents.mmd.
[9:26] agents.mmd.
[9:26] agents.mmd. And
[9:28] And
[9:28] And this will be reflected anywhere down the
[9:31] this will be reflected anywhere down the
[9:31] this will be reflected anywhere down the tree because as the agent navigates the
[9:35] tree because as the agent navigates the
[9:35] tree because as the agent navigates the documentation hierarchy from top to
[9:37] documentation hierarchy from top to
[9:37] documentation hierarchy from top to bottom, it will keep in the context
[9:39] bottom, it will keep in the context
[9:40] bottom, it will keep in the context window all the information and
[9:42] window all the information and
[9:42] window all the information and instruction from the parents agent MD
[9:44] instruction from the parents agent MD
[9:44] instruction from the parents agent MD files and all the detailed instructions
[9:47] files and all the detailed instructions
[9:47] files and all the detailed instructions from the end of the tree. So once we get
[9:51] from the end of the tree. So once we get
[9:51] from the end of the tree. So once we get once we get deep enough like into I
[9:53] once we get deep enough like into I
[9:53] once we get deep enough like into I don't know maybe jobs
[9:56] don't know maybe jobs
[9:56] don't know maybe jobs here we should have more specific
[9:58] here we should have more specific
[9:58] here we should have more specific instructions function names etc
[10:03] instructions function names etc
[10:03] instructions function names etc to the problem at hand in this folder
[10:06] to the problem at hand in this folder
[10:06] to the problem at hand in this folder but in the parents
[10:08] but in the parents
[10:08] but in the parents in the server for example
[10:12] in the server for example
[10:12] in the server for example we will have higher level instructions
[10:14] we will have higher level instructions
[10:14] we will have higher level instructions where to put stuff how to work how to
[10:17] where to put stuff how to work how to
[10:17] where to put stuff how to work how to organize code etc. ETA and all of this
[10:20] organize code etc. ETA and all of this
[10:20] organize code etc. ETA and all of this compounds as the agent traverses the
[10:23] compounds as the agent traverses the
[10:23] compounds as the agent traverses the tree. So no information is lost. Even is
[10:28] tree. So no information is lost. Even is
[10:28] tree. So no information is lost. Even is even if something is in a different
[10:29] even if something is in a different
[10:29] even if something is in a different branch of the tree, it can still be
[10:32] branch of the tree, it can still be
[10:32] branch of the tree, it can still be linked in the docs index or in one of
[10:37] linked in the docs index or in one of
[10:37] linked in the docs index or in one of the sections above. If you have a shared
[10:40] the sections above. If you have a shared
[10:40] the sections above. If you have a shared functionality like helpers, they can be
[10:42] functionality like helpers, they can be
[10:42] functionality like helpers, they can be in a different part of the tree and the
[10:44] in a different part of the tree and the
[10:44] in a different part of the tree and the agent can still link them together using
[10:45] agent can still link them together using
[10:45] agent can still link them together using these markdown files. So these markdown
[10:49] these markdown files. So these markdown
[10:49] these markdown files. So these markdown files are like a preview of the whole
[10:53] files are like a preview of the whole
[10:53] files are like a preview of the whole codebase. It's like a map for the agent
[10:55] codebase. It's like a map for the agent
[10:56] codebase. It's like a map for the agent and the agent only navigates the map
[11:00] and the agent only navigates the map
[11:00] and the agent only navigates the map until the point it needs to touch the
[11:02] until the point it needs to touch the
[11:02] until the point it needs to touch the actual code. And so we don't pollute the
[11:06] actual code. And so we don't pollute the
[11:06] actual code. And so we don't pollute the context window with any unrelevant
[11:09] context window with any unrelevant
[11:10] context window with any unrelevant information. It can see all of the
[11:12] information. It can see all of the
[11:12] information. It can see all of the documentation files on the path to the
[11:16] documentation files on the path to the
[11:16] documentation files on the path to the target. It doesn't see any of the
[11:18] target. It doesn't see any of the
[11:18] target. It doesn't see any of the sibling folders unless they are manually
[11:21] sibling folders unless they are manually
[11:21] sibling folders unless they are manually linked because they are relevant.
[11:24] linked because they are relevant.
[11:24] linked because they are relevant. Okay, enough talking. I guess I can show
[11:27] Okay, enough talking. I guess I can show
[11:27] Okay, enough talking. I guess I can show you how you can implement this into your
[11:30] you how you can implement this into your
[11:30] you how you can implement this into your own repository. It's it's very simple.
[11:34] own repository. It's it's very simple.
[11:34] own repository. It's it's very simple. All you need to do is open the
[11:37] All you need to do is open the
[11:37] All you need to do is open the agents.mmd from the docs repository.
[11:39] agents.mmd from the docs repository.
[11:39] agents.mmd from the docs repository. Simply
[11:41] Simply
[11:41] Simply copy the file and let's go to terminal.
[11:49] All right, I am in my terminal. I have
[11:49] All right, I am in my terminal. I have cloned our agent zero connector that is
[11:51] cloned our agent zero connector that is
[11:52] cloned our agent zero connector that is a repository that is not yet documented.
[11:54] a repository that is not yet documented.
[11:54] a repository that is not yet documented. So I will now simply start
[11:59] So I will now simply start
[11:59] So I will now simply start codeex here
[12:01] codeex here
[12:01] codeex here and I will tell codeex
[12:03] and I will tell codeex
[12:03] and I will tell codeex add this at the end of
[12:08] add this at the end of
[12:08] add this at the end of agents MD here or create.
[12:12] agents MD here or create.
[12:12] agents MD here or create. I don't know if there's already agents
[12:14] I don't know if there's already agents
[12:14] I don't know if there's already agents MD in this repo. I don't really care.
[12:17] MD in this repo. I don't really care.
[12:17] MD in this repo. I don't really care. Codex will take this add it at the end
[12:20] Codex will take this add it at the end
[12:20] Codex will take this add it at the end of the agents MD
[12:23] of the agents MD
[12:23] of the agents MD and then I can tell it
[12:26] and then I can tell it
[12:26] and then I can tell it now
[12:28] now
[12:28] now initialize the docs index.
[12:33] initialize the docs index.
[12:33] initialize the docs index. Okay, I'm put this to Q.
[12:41] And so now agents.mmd is
[12:41] And so now agents.mmd is either created or edited with the docs
[12:44] either created or edited with the docs
[12:44] either created or edited with the docs framework appended at the end. And so
[12:48] framework appended at the end. And so
[12:48] framework appended at the end. And so now codeex will understand what docs
[12:50] now codeex will understand what docs
[12:50] now codeex will understand what docs means because agents.mmd is always
[12:54] means because agents.mmd is always
[12:54] means because agents.mmd is always included in the system prompt or in the
[12:57] included in the system prompt or in the
[12:57] included in the system prompt or in the context window.
[13:04] And now that I have told it to
[13:04] And now that I have told it to initialize the doc index, it knows what
[13:06] initialize the doc index, it knows what
[13:06] initialize the doc index, it knows what to do. It will start reading through the
[13:09] to do. It will start reading through the
[13:09] to do. It will start reading through the codebase and creating this agents.mmd
[13:13] codebase and creating this agents.mmd
[13:13] codebase and creating this agents.mmd documentation points throughout the
[13:15] documentation points throughout the
[13:15] documentation points throughout the repository and linking these files
[13:17] repository and linking these files
[13:17] repository and linking these files together. It will probably take a few
[13:19] together. It will probably take a few
[13:19] together. It will probably take a few minutes because the LLM needs to read
[13:23] minutes because the LLM needs to read
[13:23] minutes because the LLM needs to read through all of the codebase or most of
[13:25] through all of the codebase or most of
[13:25] through all of the codebase or most of the codebase and manually write these
[13:27] the codebase and manually write these
[13:28] the codebase and manually write these documentation files.
[13:30] documentation files.
[13:30] documentation files. But in a bit we should be able to see
[13:32] But in a bit we should be able to see
[13:32] But in a bit we should be able to see the first result.
[13:41] Okay. So it took about 5 minutes to
[13:41] Okay. So it took about 5 minutes to index the existing codebase. This is not
[13:43] index the existing codebase. This is not
[13:43] index the existing codebase. This is not a particularly large one. These are the
[13:45] a particularly large one. These are the
[13:45] a particularly large one. These are the agents MD files created in the
[13:47] agents MD files created in the
[13:47] agents MD files created in the subfolders for dev tools documentation
[13:50] subfolders for dev tools documentation
[13:50] subfolders for dev tools documentation for the source for different screen
[13:53] for the source for different screen
[13:53] for the source for different screen styles etc. So let's see how it went.
[14:01] Okay. So this is the top level agents
[14:01] Okay. So this is the top level agents MD. There were some instructions and
[14:04] MD. There were some instructions and
[14:04] MD. There were some instructions and links previously. So docs will start
[14:06] links previously. So docs will start
[14:06] links previously. So docs will start somewhere here.
[14:13] Here we have it.
[14:13] Here we have it. And here we have the child docs index.
[14:17] And here we have the child docs index.
[14:17] And here we have the child docs index. So we can take a look into let's say
[14:20] So we can take a look into let's say
[14:20] So we can take a look into let's say source screens.
[14:22] source screens.
[14:22] source screens. And here we have the ownership parent
[14:25] And here we have the ownership parent
[14:25] And here we have the ownership parent package rules control app integration
[14:27] package rules control app integration
[14:27] package rules control app integration commands protocol
[14:29] commands protocol
[14:29] commands protocol screens should return typed results data
[14:31] screens should return typed results data
[14:31] screens should return typed results data classes or none
[14:34] classes or none
[14:34] classes or none and no children under screens.
[14:38] and no children under screens.
[14:38] and no children under screens. We can enhance this.
[14:42] We can enhance this.
[14:42] We can enhance this. I can tell I want to enhance the
[14:44] I can tell I want to enhance the
[14:44] I can tell I want to enhance the documentation of screens. I want all the
[14:46] documentation of screens. I want all the
[14:46] documentation of screens. I want all the Python files in the screens folder to
[14:49] Python files in the screens folder to
[14:49] Python files in the screens folder to have their own documentation. the same
[14:51] have their own documentation. the same
[14:51] have their own documentation. the same file name with markdown appended at the
[14:55] file name with markdown appended at the
[14:55] file name with markdown appended at the end. And they will document individual
[14:59] end. And they will document individual
[14:59] end. And they will document individual screens and they will be listed as child
[15:02] screens and they will be listed as child
[15:02] screens and they will be listed as child docs indices in their parent
[15:05] docs indices in their parent
[15:05] docs indices in their parent documentation file.
[15:13] And just like that, if we have something
[15:13] And just like that, if we have something in our project
[15:16] in our project
[15:16] in our project that is not separated enough, like in
[15:19] that is not separated enough, like in
[15:19] that is not separated enough, like in agent zero, we for example have a
[15:22] agent zero, we for example have a
[15:22] agent zero, we for example have a helpers folder which contains maybe 100
[15:25] helpers folder which contains maybe 100
[15:25] helpers folder which contains maybe 100 scripts by now. We can do it like this.
[15:28] scripts by now. We can do it like this.
[15:28] scripts by now. We can do it like this. We don't need to separate it into
[15:30] We don't need to separate it into
[15:30] We don't need to separate it into subfolders. We can simply tell the agent
[15:33] subfolders. We can simply tell the agent
[15:33] subfolders. We can simply tell the agent we want to change the documentation
[15:36] we want to change the documentation
[15:36] we want to change the documentation structure for this particular folder. We
[15:39] structure for this particular folder. We
[15:39] structure for this particular folder. We want to document each of these files
[15:41] want to document each of these files
[15:41] want to document each of these files individually and it will simply put the
[15:44] individually and it will simply put the
[15:44] individually and it will simply put the rule into this agents.mmd file which
[15:47] rule into this agents.mmd file which
[15:47] rule into this agents.mmd file which will make it be applied only for this
[15:50] will make it be applied only for this
[15:50] will make it be applied only for this folder and this folder can have its
[15:52] folder and this folder can have its
[15:52] folder and this folder can have its individual files documented separately.
[15:55] individual files documented separately.
[15:55] individual files documented separately. We can do this for any folder throughout
[15:57] We can do this for any folder throughout
[15:57] We can do this for any folder throughout the repo. We can tell the agent we want
[16:00] the repo. We can tell the agent we want
[16:00] the repo. We can tell the agent we want to do this for every single folder for
[16:03] to do this for every single folder for
[16:03] to do this for every single folder for the repo and in that case the agent
[16:05] the repo and in that case the agent
[16:05] the repo and in that case the agent would put it into the top level agents
[16:06] would put it into the top level agents
[16:06] would put it into the top level agents MD. It's up to us. The framework is
[16:10] MD. It's up to us. The framework is
[16:10] MD. It's up to us. The framework is really simple and customizable. You can
[16:13] really simple and customizable. You can
[16:13] really simple and customizable. You can simply tell the agent that you want to
[16:15] simply tell the agent that you want to
[16:15] simply tell the agent that you want to do something differently and it will
[16:16] do something differently and it will
[16:16] do something differently and it will apply it to the correct agent MD files.
[16:20] apply it to the correct agent MD files.
[16:20] apply it to the correct agent MD files. And we can see the update here. So the
[16:23] And we can see the update here. So the
[16:23] And we can see the update here. So the agent MD in screens was updated
[16:27] agent MD in screens was updated
[16:27] agent MD in screens was updated somewhere here.
[16:29] somewhere here.
[16:29] somewhere here. It tells that every Python module in
[16:31] It tells that every Python module in
[16:31] It tells that every Python module in this folder must have a sibling markdown
[16:33] this folder must have a sibling markdown
[16:33] this folder must have a sibling markdown document. And just like that, every file
[16:37] document. And just like that, every file
[16:37] document. And just like that, every file in this folder is now documented. And uh
[16:41] in this folder is now documented. And uh
[16:41] in this folder is now documented. And uh let's do some edit. Uh what do we have
[16:43] let's do some edit. Uh what do we have
[16:43] let's do some edit. Uh what do we have here?
[16:45] here?
[16:45] here? We have installed plugins.
[16:50] We have installed plugins.
[16:50] We have installed plugins. Okay, I'm going to tell the agent that I
[16:51] Okay, I'm going to tell the agent that I
[16:51] Okay, I'm going to tell the agent that I want to change something in the plugins
[16:54] want to change something in the plugins
[16:54] want to change something in the plugins view.
[16:56] view.
[16:56] view. I want to change the plugins view to
[16:59] I want to change the plugins view to
[16:59] I want to change the plugins view to have a different background color than
[17:01] have a different background color than
[17:01] have a different background color than the others. Once the user opens that
[17:04] the others. Once the user opens that
[17:04] the others. Once the user opens that screen, I want the background to change
[17:06] screen, I want the background to change
[17:06] screen, I want the background to change from black or whatever we use now to
[17:09] from black or whatever we use now to
[17:09] from black or whatever we use now to red.
[17:16] And obviously I I have no intention in
[17:16] And obviously I I have no intention in in keeping this edit. I just want to
[17:19] in keeping this edit. I just want to
[17:19] in keeping this edit. I just want to demonstrate
[17:21] demonstrate
[17:21] demonstrate how will codeex proceed.
[17:29] I will update the installed plug-in
[17:29] I will update the installed plug-in screen styling. I will reread the
[17:31] screen styling. I will reread the
[17:31] screen styling. I will reread the applicable doc chain. This is the
[17:32] applicable doc chain. This is the
[17:32] applicable doc chain. This is the important part that the agent will read
[17:36] important part that the agent will read
[17:36] important part that the agent will read the doc chain because it may have been
[17:38] the doc chain because it may have been
[17:38] the doc chain because it may have been changed. So it will start from the top
[17:41] changed. So it will start from the top
[17:41] changed. So it will start from the top read through all the documentation find
[17:43] read through all the documentation find
[17:43] read through all the documentation find the right documentation file for the
[17:45] the right documentation file for the
[17:45] the right documentation file for the plugins screen.
[17:51] I am looking at the existing installed
[17:51] I am looking at the existing installed plug-in selectors. Now the likely change
[17:53] plug-in selectors. Now the likely change
[17:53] plug-in selectors. Now the likely change is in a screen scoped TCSS rule. I have
[17:57] is in a screen scoped TCSS rule. I have
[17:57] is in a screen scoped TCSS rule. I have no idea what it's talking about but now
[17:59] no idea what it's talking about but now
[17:59] no idea what it's talking about but now it has all the documentation. I don't
[18:01] it has all the documentation. I don't
[18:01] it has all the documentation. I don't need to worry about it.
[18:08] All right. So, we have changed the
[18:08] All right. So, we have changed the installed plugins screen backdrop to
[18:10] installed plugins screen backdrop to
[18:10] installed plugins screen backdrop to red. The inner plugin stays dark.
[18:15] red. The inner plugin stays dark.
[18:15] red. The inner plugin stays dark. Updated the markdown documentation
[18:19] Updated the markdown documentation
[18:19] Updated the markdown documentation and verify the syntax.
[18:23] and verify the syntax.
[18:24] and verify the syntax. And of course, this is compatible with
[18:25] And of course, this is compatible with
[18:25] And of course, this is compatible with any AI agent that supports agents.mmd.
[18:28] any AI agent that supports agents.mmd.
[18:28] any AI agent that supports agents.mmd. In agent zero, you can do this in
[18:30] In agent zero, you can do this in
[18:30] In agent zero, you can do this in project. For example,
[18:33] project. For example,
[18:33] project. For example, when you create a new project, you can
[18:35] when you create a new project, you can
[18:35] when you create a new project, you can put it directly to the project
[18:37] put it directly to the project
[18:37] put it directly to the project instructions or you can create it as an
[18:41] instructions or you can create it as an
[18:41] instructions or you can create it as an agent.mmd file inside that project. The
[18:43] agent.mmd file inside that project. The
[18:43] agent.mmd file inside that project. The agent will see it or you can simply tell
[18:46] agent will see it or you can simply tell
[18:46] agent will see it or you can simply tell your agent to clone agent0/docs
[18:51] your agent to clone agent0/docs
[18:51] your agent to clone agent0/docs repository into your current workspace.
[18:53] repository into your current workspace.
[18:53] repository into your current workspace. It will do it for you.
[18:55] It will do it for you.
[18:55] It will do it for you. So, this is the life-changing markdown
[18:56] So, this is the life-changing markdown
[18:56] So, this is the life-changing markdown file you've been looking for. You can
[18:58] file you've been looking for. You can
[18:58] file you've been looking for. You can thank me later. You can give us a star.
[19:00] thank me later. You can give us a star.
[19:00] thank me later. You can give us a star. We only have 41 of these by now. It's
[19:02] We only have 41 of these by now. It's
[19:02] We only have 41 of these by now. It's really fresh. You can subscribe to our
[19:04] really fresh. You can subscribe to our
[19:04] really fresh. You can subscribe to our channel if you like what we do. And see
[19:06] channel if you like what we do. And see
[19:06] channel if you like what we do. And see you next time.
