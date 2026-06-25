---
video_id: sMX5bY3OvJM
source_url: https://www.youtube.com/watch?v=sMX5bY3OvJM
title: "Structured AI Memory (Faster, Less Token) 👍"
channel: "Discover AI"
uploader_id: "@code4AI"
duration: 1782
duration_human: "29:42"
published: 2026-06-12
language: en
transcription: captions
chapters:
  []
tags: ["artificial intelligence", "AI models", "LLM", "VLM", "VLA", "Multi-modal model", "explanatory video", "RAG", "multi-AI", "multi-agent", "Fine-tune", "Pre-train", "RLHF", "AI Agent", "Multi-agent", "Vision Language Model", "Video AI"]
categories: ["Science & Technology"]
fetched: 2026-06-25T11:52:24Z
---

# Structured AI Memory (Faster, Less Token) 👍

[0:02] Hello community. So great that you are
[0:02] Hello community. So great that you are back. We have a new insert and a new
[0:04] back. We have a new insert and a new
[0:04] back. We have a new insert and a new research paper on a better memory for
[0:07] research paper on a better memory for
[0:08] research paper on a better memory for artificial intelligence. So let's have a
[0:10] artificial intelligence. So let's have a
[0:10] artificial intelligence. So let's have a look now. Imagine you have an AI agent
[0:13] look now. Imagine you have an AI agent
[0:13] look now. Imagine you have an AI agent that has been running for 8 hours. Now
[0:14] that has been running for 8 hours. Now
[0:14] that has been running for 8 hours. Now open file to execute the all the
[0:16] open file to execute the all the
[0:16] open file to execute the all the commands talk to the user search the
[0:18] commands talk to the user search the
[0:18] commands talk to the user search the documentation and you have thousands of
[0:20] documentation and you have thousands of
[0:20] documentation and you have thousands of actions. Now what is memory? What you
[0:23] actions. Now what is memory? What you
[0:23] actions. Now what is memory? What you should write into memory? And now up
[0:25] should write into memory? And now up
[0:25] should write into memory? And now up until now a lot of people said store
[0:27] until now a lot of people said store
[0:27] until now a lot of people said store everything and search it later because
[0:29] everything and search it later because
[0:29] everything and search it later because you never know what exactly you're going
[0:31] you never know what exactly you're going
[0:31] you never know what exactly you're going to use later on for a different task.
[0:33] to use later on for a different task.
[0:33] to use later on for a different task. No. And this has become the foundation
[0:36] No. And this has become the foundation
[0:36] No. And this has become the foundation of almost every agent memory system. And
[0:39] of almost every agent memory system. And
[0:39] of almost every agent memory system. And now a new paper argues that this is
[0:40] now a new paper argues that this is
[0:40] now a new paper argues that this is completely wrong. We are doing it wrong.
[0:43] completely wrong. We are doing it wrong.
[0:43] completely wrong. We are doing it wrong. And there's a much better much more
[0:46] And there's a much better much more
[0:46] And there's a much better much more token efficient way. And just think
[0:49] token efficient way. And just think
[0:49] token efficient way. And just think about fable five token efficient. Oh
[0:52] about fable five token efficient. Oh
[0:52] about fable five token efficient. Oh yeah, I'm interested. So why agent
[0:55] yeah, I'm interested. So why agent
[0:55] yeah, I'm interested. So why agent memory still doesn't work here in the
[0:57] memory still doesn't work here in the
[0:57] memory still doesn't work here in the way that we want it to work in an
[0:59] way that we want it to work in an
[0:59] way that we want it to work in an optimized way? We have two solutions
[1:01] optimized way? We have two solutions
[1:02] optimized way? We have two solutions more or less today. Now we either
[1:03] more or less today. Now we either
[1:03] more or less today. Now we either compress the memory, we have a
[1:05] compress the memory, we have a
[1:05] compress the memory, we have a compactification
[1:06] compactification
[1:06] compactification but you know we have to lose information
[1:09] but you know we have to lose information
[1:09] but you know we have to lose information because if we do a compactification and
[1:11] because if we do a compactification and
[1:12] because if we do a compactification and we don't know what we need exactly in
[1:13] we don't know what we need exactly in
[1:13] we don't know what we need exactly in the future. So we go more or less with a
[1:15] the future. So we go more or less with a
[1:16] the future. So we go more or less with a probability lookup. Solution two is to
[1:18] probability lookup. Solution two is to
[1:18] probability lookup. Solution two is to retrieve now the memory where we have a
[1:20] retrieve now the memory where we have a
[1:20] retrieve now the memory where we have a complete full pot of memory. But you
[1:23] complete full pot of memory. But you
[1:23] complete full pot of memory. But you know how do we retrieve this? This is
[1:25] know how do we retrieve this? This is
[1:25] know how do we retrieve this? This is normally in a mathematical vector space.
[1:27] normally in a mathematical vector space.
[1:28] normally in a mathematical vector space. So this means we have a coen similarity.
[1:30] So this means we have a coen similarity.
[1:30] So this means we have a coen similarity. But you know that coen similarity does
[1:32] But you know that coen similarity does
[1:32] But you know that coen similarity does not mean causality. So especially if you
[1:35] not mean causality. So especially if you
[1:35] not mean causality. So especially if you go in longer reasoning chain a
[1:37] go in longer reasoning chain a
[1:37] go in longer reasoning chain a similarity in a vector space is not your
[1:40] similarity in a vector space is not your
[1:40] similarity in a vector space is not your memory representation.
[1:46] So most memory system work like this in
[1:46] So most memory system work like this in the simplest abstraction. We have a
[1:48] the simplest abstraction. We have a
[1:48] the simplest abstraction. We have a question. We have an embedding of the
[1:49] question. We have an embedding of the
[1:49] question. We have an embedding of the question. Then we put it in the
[1:51] question. Then we put it in the
[1:51] question. Then we put it in the mathematical space over there. We
[1:53] mathematical space over there. We
[1:53] mathematical space over there. We already have encoded all the information
[1:55] already have encoded all the information
[1:55] already have encoded all the information and the knowledge and everything. So we
[1:57] and the knowledge and everything. So we
[1:57] and the knowledge and everything. So we just have to find here two vectors here,
[2:00] just have to find here two vectors here,
[2:00] just have to find here two vectors here, the nearest neighbors here to our
[2:01] the nearest neighbors here to our
[2:01] the nearest neighbors here to our embedding vector representation and all
[2:04] embedding vector representation and all
[2:04] embedding vector representation and all these top five neighbors. Then maybe we
[2:06] these top five neighbors. Then maybe we
[2:06] these top five neighbors. Then maybe we have a concatenation or an average and
[2:08] have a concatenation or an average and
[2:08] have a concatenation or an average and this generates here the answer. Great.
[2:11] this generates here the answer. Great.
[2:11] this generates here the answer. Great. Now this new system that I'm going to
[2:13] Now this new system that I'm going to
[2:13] Now this new system that I'm going to show you hormma ask now hey why are we
[2:16] show you hormma ask now hey why are we
[2:16] show you hormma ask now hey why are we searching an unorganized pile of
[2:19] searching an unorganized pile of
[2:19] searching an unorganized pile of experiences in the first place
[2:23] experiences in the first place
[2:23] experiences in the first place we do something wrong just by generating
[2:25] we do something wrong just by generating
[2:25] we do something wrong just by generating here all this information and we just
[2:27] here all this information and we just
[2:27] here all this information and we just put it in memory without thinking about
[2:29] put it in memory without thinking about
[2:29] put it in memory without thinking about how to optimize this now the solution by
[2:32] how to optimize this now the solution by
[2:32] how to optimize this now the solution by hormer is simple no we have our
[2:35] hormer is simple no we have our
[2:35] hormer is simple no we have our traditional experiences and normally we
[2:36] traditional experiences and normally we
[2:36] traditional experiences and normally we would store everything and then we would
[2:38] would store everything and then we would
[2:38] would store everything and then we would just retrieve it with a rack system or
[2:40] just retrieve it with a rack system or
[2:40] just retrieve it with a rack system or graph rack system or whatever we have.
[2:43] graph rack system or whatever we have.
[2:43] graph rack system or whatever we have. Now they say you know what we have a
[2:45] Now they say you know what we have a
[2:45] Now they say you know what we have a much better performance and a token
[2:48] much better performance and a token
[2:48] much better performance and a token better performance if we have the
[2:51] better performance if we have the
[2:51] better performance if we have the experiences then we organize it and then
[2:54] experiences then we organize it and then
[2:54] experiences then we organize it and then we retrieved here in an organized way.
[2:57] we retrieved here in an organized way.
[2:57] we retrieved here in an organized way. So the preprint now that I'm going to
[2:59] So the preprint now that I'm going to
[2:59] So the preprint now that I'm going to show you uh published June 10, 2026
[3:02] show you uh published June 10, 2026
[3:02] show you uh published June 10, 2026 organizes now the experiences into a
[3:04] organizes now the experiences into a
[3:04] organizes now the experiences into a hierarchical structure where the
[3:06] hierarchical structure where the
[3:06] hierarchical structure where the summaries remain linked to the raw
[3:08] summaries remain linked to the raw
[3:08] summaries remain linked to the raw trajectory. And this is important
[3:10] trajectory. And this is important
[3:10] trajectory. And this is important because you only want to go back here to
[3:12] because you only want to go back here to
[3:12] because you only want to go back here to the original data to the real truth data
[3:15] the original data to the real truth data
[3:15] the original data to the real truth data and you don't want to have here some
[3:16] and you don't want to have here some
[3:16] and you don't want to have here some compactification where you maybe have
[3:19] compactification where you maybe have
[3:19] compactification where you maybe have hallucination. You always have to have a
[3:21] hallucination. You always have to have a
[3:21] hallucination. You always have to have a verifiable link to the original data.
[3:24] verifiable link to the original data.
[3:24] verifiable link to the original data. Now just to give you a feeling we will
[3:26] Now just to give you a feeling we will
[3:26] Now just to give you a feeling we will go in detail in the second part of the
[3:28] go in detail in the second part of the
[3:28] go in detail in the second part of the video. There is now two component. At
[3:30] video. There is now two component. At
[3:30] video. There is now two component. At first it decouples here because it says
[3:33] first it decouples here because it says
[3:33] first it decouples here because it says hm I will I will show you the reason why
[3:36] hm I will I will show you the reason why
[3:36] hm I will I will show you the reason why we decouple later on. The first step is
[3:39] we decouple later on. The first step is
[3:39] we decouple later on. The first step is we have to build a memory. Now we have a
[3:42] we have to build a memory. Now we have a
[3:42] we have to build a memory. Now we have a memory construction but we want to have
[3:44] memory construction but we want to have
[3:44] memory construction but we want to have a structured memory construction for a
[3:47] a structured memory construction for a
[3:47] a structured memory construction for a particular reason and this is here a
[3:48] particular reason and this is here a
[3:48] particular reason and this is here a token efficiency. I give you the mat in
[3:51] token efficiency. I give you the mat in
[3:51] token efficiency. I give you the mat in a minute and stage two is then something
[3:54] a minute and stage two is then something
[3:54] a minute and stage two is then something classical. This is now the retrieval and
[3:57] classical. This is now the retrieval and
[3:57] classical. This is now the retrieval and this is now a navigationbased retrieval.
[3:59] this is now a navigationbased retrieval.
[3:59] this is now a navigationbased retrieval. I will show you. We go here or the
[4:01] I will show you. We go here or the
[4:01] I will show you. We go here or the authors go here with a 4 billion large
[4:03] authors go here with a 4 billion large
[4:03] authors go here with a 4 billion large language model, a QN model and they just
[4:06] language model, a QN model and they just
[4:06] language model, a QN model and they just have a little bit of a reinforcement
[4:08] have a little bit of a reinforcement
[4:08] have a little bit of a reinforcement learning here on bash commands and we
[4:09] learning here on bash commands and we
[4:10] learning here on bash commands and we have a perfect retriever. But if you
[4:12] have a perfect retriever. But if you
[4:12] have a perfect retriever. But if you want the main intelligence is now in
[4:15] want the main intelligence is now in
[4:15] want the main intelligence is now in stage one, we do not just put all the
[4:18] stage one, we do not just put all the
[4:18] stage one, we do not just put all the trash into the memory, but we have now a
[4:21] trash into the memory, but we have now a
[4:21] trash into the memory, but we have now a structured memory construction.
[4:24] structured memory construction.
[4:24] structured memory construction. So if you want to say the most memory
[4:26] So if you want to say the most memory
[4:26] So if you want to say the most memory papers up until now optimize the
[4:28] papers up until now optimize the
[4:28] papers up until now optimize the retrieval of memory. No the rag I don't
[4:31] retrieval of memory. No the rag I don't
[4:31] retrieval of memory. No the rag I don't know I have 124 different rag system
[4:33] know I have 124 different rag system
[4:33] know I have 124 different rag system currently in my database. But now this
[4:35] currently in my database. But now this
[4:35] currently in my database. But now this new system says hey stop this is the
[4:37] new system says hey stop this is the
[4:37] new system says hey stop this is the wrong approach. Hormo optimizes now the
[4:40] wrong approach. Hormo optimizes now the
[4:40] wrong approach. Hormo optimizes now the organization of knowledge to be included
[4:43] organization of knowledge to be included
[4:43] organization of knowledge to be included in the memory construction itself.
[4:47] in the memory construction itself.
[4:47] in the memory construction itself. And how do they do this? they have a
[4:49] And how do they do this? they have a
[4:49] And how do they do this? they have a particular method and here as the
[4:50] particular method and here as the
[4:50] particular method and here as the simplest run here I explained this a
[4:53] simplest run here I explained this a
[4:53] simplest run here I explained this a little bit later in the second half we
[4:54] little bit later in the second half we
[4:54] little bit later in the second half we go here for the missing information
[4:57] go here for the missing information
[4:57] go here for the missing information failures so agent needs more context and
[5:00] failures so agent needs more context and
[5:00] failures so agent needs more context and the opposite the agent has too much
[5:02] the opposite the agent has too much
[5:02] the opposite the agent has too much context is overloaded with context and
[5:05] context is overloaded with context and
[5:05] context is overloaded with context and we will show you here a simple mechanism
[5:08] we will show you here a simple mechanism
[5:08] we will show you here a simple mechanism if you just have this so you have
[5:10] if you just have this so you have
[5:10] if you just have this so you have missing and too much guess what yes you
[5:13] missing and too much guess what yes you
[5:13] missing and too much guess what yes you have an idea exactly where is the
[5:15] have an idea exactly where is the
[5:15] have an idea exactly where is the equilibrium and this will define now
[5:17] equilibrium and this will define now
[5:18] equilibrium and this will define now here a beautiful optimization of the
[5:20] here a beautiful optimization of the
[5:20] here a beautiful optimization of the failure modes and this will here
[5:23] failure modes and this will here
[5:23] failure modes and this will here optimize the organization itself.
[5:27] optimize the organization itself.
[5:27] optimize the organization itself. So again most system up until now says
[5:30] So again most system up until now says
[5:30] So again most system up until now says hey which memory is closest is here a
[5:32] hey which memory is closest is here a
[5:32] hey which memory is closest is here a mathematical vector representation with
[5:34] mathematical vector representation with
[5:34] mathematical vector representation with a cosine similarity and now we see
[5:36] a cosine similarity and now we see
[5:36] a cosine similarity and now we see something else different because now we
[5:38] something else different because now we
[5:38] something else different because now we ask hey which path should I traverse
[5:41] ask hey which path should I traverse
[5:41] ask hey which path should I traverse here in a new mathematical space so we
[5:45] here in a new mathematical space so we
[5:45] here in a new mathematical space so we have the root then we have the project
[5:47] have the root then we have the project
[5:47] have the root then we have the project then we have the deployment we have all
[5:48] then we have the deployment we have all
[5:48] then we have the deployment we have all the logs and then we build a new memory
[5:51] the logs and then we build a new memory
[5:51] the logs and then we build a new memory structure. Okay so let's do this. So
[5:54] structure. Okay so let's do this. So
[5:54] structure. Okay so let's do this. So let's start now a little bit more in
[5:56] let's start now a little bit more in
[5:56] let's start now a little bit more in detail. This was just a warm up here.
[5:58] detail. This was just a warm up here.
[5:58] detail. This was just a warm up here. What is the actual algorithmic
[6:00] What is the actual algorithmic
[6:00] What is the actual algorithmic innovation of this new paper? Now again
[6:03] innovation of this new paper? Now again
[6:03] innovation of this new paper? Now again you know this is here our arc max here
[6:05] you know this is here our arc max here
[6:05] you know this is here our arc max here of the similarity here of a uh query and
[6:08] of the similarity here of a uh query and
[6:08] of the similarity here of a uh query and our memory item here and this is our sim
[6:11] our memory item here and this is our sim
[6:11] our memory item here and this is our sim is our cosine similarity and this is
[6:13] is our cosine similarity and this is
[6:13] is our cosine similarity and this is here the basic of a vanilla ra system.
[6:15] here the basic of a vanilla ra system.
[6:15] here the basic of a vanilla ra system. No so the retrieval decision happens
[6:18] No so the retrieval decision happens
[6:18] No so the retrieval decision happens once. Great.
[6:20] once. Great.
[6:20] once. Great. Now what's happening is that Homer in
[6:23] Now what's happening is that Homer in
[6:23] Now what's happening is that Homer in this new system turns this retrieval
[6:26] this new system turns this retrieval
[6:26] this new system turns this retrieval into here a particular in a basic sense
[6:30] into here a particular in a basic sense
[6:30] into here a particular in a basic sense a reinforcement learning formulation
[6:32] a reinforcement learning formulation
[6:32] a reinforcement learning formulation because we will define a policy. So we
[6:35] because we will define a policy. So we
[6:35] because we will define a policy. So we will have here a current location in the
[6:37] will have here a current location in the
[6:37] will have here a current location in the memory hierarchy and we want to go to a
[6:40] memory hierarchy and we want to go to a
[6:40] memory hierarchy and we want to go to a next navigation action point with a
[6:43] next navigation action point with a
[6:43] next navigation action point with a particular policy of our LLM a learned
[6:46] particular policy of our LLM a learned
[6:46] particular policy of our LLM a learned policy here. So we have a complete
[6:49] policy here. So we have a complete
[6:49] policy here. So we have a complete different way how to retrieve this.
[6:54] different way how to retrieve this.
[6:54] different way how to retrieve this. So we go if you want from a question hey
[6:56] So we go if you want from a question hey
[6:56] So we go if you want from a question hey which memory in the pile of memory that
[6:59] which memory in the pile of memory that
[6:59] which memory in the pile of memory that we have here in our vector database or
[7:01] we have here in our vector database or
[7:01] we have here in our vector database or whatever you have a graph database here
[7:03] whatever you have a graph database here
[7:03] whatever you have a graph database here and you have rag to where should I go
[7:06] and you have rag to where should I go
[7:06] and you have rag to where should I go next? And this completely changes here
[7:09] next? And this completely changes here
[7:09] next? And this completely changes here how we see the search space and how we
[7:12] how we see the search space and how we
[7:12] how we see the search space and how we optimize and how we mathematically
[7:14] optimize and how we mathematically
[7:14] optimize and how we mathematically configure the search base. Then for the
[7:17] configure the search base. Then for the
[7:17] configure the search base. Then for the retrieval
[7:22] again the traditional rag query
[7:22] again the traditional rag query similarity search and top 20 memories
[7:24] similarity search and top 20 memories
[7:24] similarity search and top 20 memories are extracted or you have a rerank or
[7:26] are extracted or you have a rerank or
[7:26] are extracted or you have a rerank or whatever classic. And now as I told you
[7:30] whatever classic. And now as I told you
[7:30] whatever classic. And now as I told you we have now a sequence of decisions to
[7:32] we have now a sequence of decisions to
[7:32] we have now a sequence of decisions to make and of course in the end we will
[7:35] make and of course in the end we will
[7:35] make and of course in the end we will look we will run into the operation of a
[7:38] look we will run into the operation of a
[7:38] look we will run into the operation of a file system.
[7:40] file system.
[7:40] file system. Now I want to give you here just a basic
[7:42] Now I want to give you here just a basic
[7:42] Now I want to give you here just a basic idea why this system is so efficient
[7:45] idea why this system is so efficient
[7:45] idea why this system is so efficient regarding tokens. Suppose we have a
[7:47] regarding tokens. Suppose we have a
[7:47] regarding tokens. Suppose we have a classical wack retrieval. Now you have
[7:49] classical wack retrieval. Now you have
[7:49] classical wack retrieval. Now you have 100,000 experiences here. Your agent was
[7:52] 100,000 experiences here. Your agent was
[7:52] 100,000 experiences here. Your agent was running 8 hours or whatever. It's just
[7:53] running 8 hours or whatever. It's just
[7:53] running 8 hours or whatever. It's just an example and traditional retrieval
[7:56] an example and traditional retrieval
[7:56] an example and traditional retrieval evaluates the relevance across the whole
[7:58] evaluates the relevance across the whole
[7:58] evaluates the relevance across the whole memory pool and this is the order of n.
[8:02] memory pool and this is the order of n.
[8:02] memory pool and this is the order of n. Now Homer introduces now a hierarchy. So
[8:05] Now Homer introduces now a hierarchy. So
[8:05] Now Homer introduces now a hierarchy. So this means if we have let's say a
[8:06] this means if we have let's say a
[8:06] this means if we have let's say a branching factor of B and R here depth
[8:08] branching factor of B and R here depth
[8:08] branching factor of B and R here depth of D then our N is here about
[8:12] of D then our N is here about
[8:12] of D then our N is here about approximated here by BP to the power of
[8:15] approximated here by BP to the power of
[8:15] approximated here by BP to the power of D which simply means D is proportional
[8:17] D which simply means D is proportional
[8:17] D which simply means D is proportional to the log B of N. So this means the
[8:20] to the log B of N. So this means the
[8:20] to the log B of N. So this means the agent only needs to make a small number
[8:23] agent only needs to make a small number
[8:23] agent only needs to make a small number of navigation decision and this is
[8:25] of navigation decision and this is
[8:25] of navigation decision and this is exactly what we want. We want to build a
[8:27] exactly what we want. We want to build a
[8:27] exactly what we want. We want to build a beautiful hierarchy for this memory
[8:29] beautiful hierarchy for this memory
[8:29] beautiful hierarchy for this memory structure. So this means and if you do
[8:31] structure. So this means and if you do
[8:31] structure. So this means and if you do the math adapt five hierarchy. So we
[8:34] the math adapt five hierarchy. So we
[8:34] the math adapt five hierarchy. So we have level 1 2 3 4 5 can organize now in
[8:37] have level 1 2 3 4 5 can organize now in
[8:37] have level 1 2 3 4 5 can organize now in a beautiful correct mathematical way
[8:39] a beautiful correct mathematical way
[8:39] a beautiful correct mathematical way 100,000 memory elements fractions and
[8:44] 100,000 memory elements fractions and
[8:44] 100,000 memory elements fractions and exactly like 100,000 experiences. So you
[8:47] exactly like 100,000 experiences. So you
[8:47] exactly like 100,000 experiences. So you see this is so much more effective. But
[8:51] see this is so much more effective. But
[8:51] see this is so much more effective. But the main question of course is now hey
[8:53] the main question of course is now hey
[8:53] the main question of course is now hey okay let's dive now a little bit of a
[8:55] okay let's dive now a little bit of a
[8:55] okay let's dive now a little bit of a deep dive into the memory construction
[8:57] deep dive into the memory construction
[8:57] deep dive into the memory construction itself. Now if you go here in a in the
[9:00] itself. Now if you go here in a in the
[9:00] itself. Now if you go here in a in the overview we have a standard mark of
[9:02] overview we have a standard mark of
[9:02] overview we have a standard mark of decision process. I have multiple videos
[9:04] decision process. I have multiple videos
[9:04] decision process. I have multiple videos on this and now we have a memory
[9:06] on this and now we have a memory
[9:06] on this and now we have a memory augmented mark of decision process. Now
[9:08] augmented mark of decision process. Now
[9:08] augmented mark of decision process. Now so now we have suddenly here an
[9:10] so now we have suddenly here an
[9:10] so now we have suddenly here an additional factor. Now so classical we
[9:13] additional factor. Now so classical we
[9:13] additional factor. Now so classical we have here the environment state. Then we
[9:14] have here the environment state. Then we
[9:14] have here the environment state. Then we have the observation. Then we have the
[9:16] have the observation. Then we have the
[9:16] have the observation. Then we have the action. Then we have the transition
[9:18] action. Then we have the transition
[9:18] action. Then we have the transition dynamics or the operator dynamics. Then
[9:20] dynamics or the operator dynamics. Then
[9:20] dynamics or the operator dynamics. Then we have here the reward structure can be
[9:23] we have here the reward structure can be
[9:23] we have here the reward structure can be end reward or process reward whatever we
[9:25] end reward or process reward whatever we
[9:25] end reward or process reward whatever we like. And now we have a new element here
[9:27] like. And now we have a new element here
[9:27] like. And now we have a new element here in in our mockoff. And this is now f of
[9:31] in in our mockoff. And this is now f of
[9:31] in in our mockoff. And this is now f of t. This is now the memory workspace.
[9:35] t. This is now the memory workspace.
[9:35] t. This is now the memory workspace. Now careful because instead of memory
[9:38] Now careful because instead of memory
[9:38] Now careful because instead of memory being hidden now inside the context
[9:39] being hidden now inside the context
[9:39] being hidden now inside the context window more or less memory becomes now
[9:41] window more or less memory becomes now
[9:42] window more or less memory becomes now in this mathematical representation an
[9:44] in this mathematical representation an
[9:44] in this mathematical representation an explicit state variable which is nice.
[9:48] explicit state variable which is nice.
[9:48] explicit state variable which is nice. So here we have it. Now the agent now
[9:51] So here we have it. Now the agent now
[9:51] So here we have it. Now the agent now has two coupled dynamical system. It is
[9:55] has two coupled dynamical system. It is
[9:55] has two coupled dynamical system. It is the classical one with the environment
[9:57] the classical one with the environment
[9:57] the classical one with the environment where we have s here is the
[9:58] where we have s here is the
[9:58] where we have s here is the environmental state at a time t + one
[10:01] environmental state at a time t + one
[10:01] environmental state at a time t + one and we have a transition dynamic that
[10:02] and we have a transition dynamic that
[10:02] and we have a transition dynamic that depends here on the state at the time t
[10:05] depends here on the state at the time t
[10:05] depends here on the state at the time t plus a specific action taken by the
[10:08] plus a specific action taken by the
[10:08] plus a specific action taken by the agent. But now as I told you we have now
[10:11] agent. But now as I told you we have now
[10:11] agent. But now as I told you we have now a decoupled structure of the memory. So
[10:13] a decoupled structure of the memory. So
[10:13] a decoupled structure of the memory. So this means the memory evolves now
[10:15] this means the memory evolves now
[10:15] this means the memory evolves now independently. So here we have again our
[10:20] independently. So here we have again our
[10:20] independently. So here we have again our dependency here on the action on the
[10:22] dependency here on the action on the
[10:22] dependency here on the action on the observation and our transition dynamics
[10:25] observation and our transition dynamics
[10:25] observation and our transition dynamics now only for the memory. So now this
[10:28] now only for the memory. So now this
[10:28] now only for the memory. So now this gets interesting because now we have to
[10:30] gets interesting because now we have to
[10:30] gets interesting because now we have to do this. So what exactly is now if we
[10:33] do this. So what exactly is now if we
[10:33] do this. So what exactly is now if we say the memory state what is it? So
[10:36] say the memory state what is it? So
[10:36] say the memory state what is it? So simple yeah what we have we have files
[10:38] simple yeah what we have we have files
[10:38] simple yeah what we have we have files we have directories and in those files
[10:41] we have directories and in those files
[10:41] we have directories and in those files and directories which give us this
[10:43] and directories which give us this
[10:43] and directories which give us this structure what a surprise we have then
[10:45] structure what a surprise we have then
[10:45] structure what a surprise we have then the notes and the meta data. Now let's
[10:47] the notes and the meta data. Now let's
[10:47] the notes and the meta data. Now let's look at the notes first. The nodes
[10:49] look at the notes first. The nodes
[10:49] look at the notes first. The nodes stores if you want they found new
[10:52] stores if you want they found new
[10:52] stores if you want they found new abstractions a particular time step
[10:54] abstractions a particular time step
[10:54] abstractions a particular time step because in a long range uh chain of
[10:57] because in a long range uh chain of
[10:57] because in a long range uh chain of argumentation it is important that we
[10:59] argumentation it is important that we
[10:59] argumentation it is important that we know which argument came first where we
[11:01] know which argument came first where we
[11:01] know which argument came first where we have a a temporal dependence in our
[11:03] have a a temporal dependence in our
[11:04] have a a temporal dependence in our argumentation or in the mathematical
[11:05] argumentation or in the mathematical
[11:05] argumentation or in the mathematical solution or in the ma mathematical proof
[11:08] solution or in the ma mathematical proof
[11:08] solution or in the ma mathematical proof writing and then as I told you we always
[11:11] writing and then as I told you we always
[11:11] writing and then as I told you we always have here a pointer to the real data a
[11:14] have here a pointer to the real data a
[11:14] have here a pointer to the real data a provenence pointer and this provenence
[11:16] provenence pointer and this provenence
[11:16] provenence pointer and this provenence link is really extremely important.
[11:18] link is really extremely important.
[11:18] link is really extremely important. important. So what Homer does now is in
[11:21] important. So what Homer does now is in
[11:21] important. So what Homer does now is in its trajectory we have yes maybe a
[11:23] its trajectory we have yes maybe a
[11:23] its trajectory we have yes maybe a summary but also the pointer to the real
[11:25] summary but also the pointer to the real
[11:25] summary but also the pointer to the real data. So it means yes we do have a comp
[11:28] data. So it means yes we do have a comp
[11:28] data. So it means yes we do have a comp compactification and a compression but
[11:30] compactification and a compression but
[11:30] compactification and a compression but it is recoverable. So we have a
[11:32] it is recoverable. So we have a
[11:32] it is recoverable. So we have a beautiful debugging and we have to have
[11:35] beautiful debugging and we have to have
[11:35] beautiful debugging and we have to have somebody who is doing here the work and
[11:37] somebody who is doing here the work and
[11:37] somebody who is doing here the work and this is our memory manager. Our memory
[11:39] this is our memory manager. Our memory
[11:39] this is our memory manager. Our memory manager has a simple task here just to
[11:43] manager has a simple task here just to
[11:43] manager has a simple task here just to have an idea about T+1 structure. So it
[11:47] have an idea about T+1 structure. So it
[11:47] have an idea about T+1 structure. So it is now as you see not really a
[11:49] is now as you see not really a
[11:49] is now as you see not really a reinforcement learning implementation
[11:52] reinforcement learning implementation
[11:52] reinforcement learning implementation because the credit assignment part for
[11:54] because the credit assignment part for
[11:54] because the credit assignment part for rein reinforcement learning becomes
[11:57] rein reinforcement learning becomes
[11:57] rein reinforcement learning becomes extremely sparse and therefore our
[11:59] extremely sparse and therefore our
[11:59] extremely sparse and therefore our reinforcement learning becomes unstable.
[12:01] reinforcement learning becomes unstable.
[12:01] reinforcement learning becomes unstable. But luckily we have decoupled this in
[12:03] But luckily we have decoupled this in
[12:03] But luckily we have decoupled this in our new methodology. So no problem
[12:06] our new methodology. So no problem
[12:06] our new methodology. So no problem because this is now here a structure
[12:09] because this is now here a structure
[12:09] because this is now here a structure induction problem. So we know this
[12:12] induction problem. So we know this
[12:12] induction problem. So we know this mathematic physics go
[12:15] mathematic physics go
[12:15] mathematic physics go the solution to this is according to the
[12:18] the solution to this is according to the
[12:18] the solution to this is according to the orus here something that we know a long
[12:20] orus here something that we know a long
[12:20] orus here something that we know a long time here from sentence bird here what
[12:22] time here from sentence bird here what
[12:22] time here from sentence bird here what we called here in the old times the
[12:23] we called here in the old times the
[12:24] we called here in the old times the contrastive memory learning here it is
[12:27] contrastive memory learning here it is
[12:27] contrastive memory learning here it is two elements the first element is the
[12:29] two elements the first element is the
[12:29] two elements the first element is the exogenous failures this is the exo the
[12:33] exogenous failures this is the exo the
[12:33] exogenous failures this is the exo the task where h succeeds but h dash falls
[12:36] task where h succeeds but h dash falls
[12:36] task where h succeeds but h dash falls where h is the raw history and h dash is
[12:40] where h is the raw history and h dash is
[12:40] where h is the raw history and h dash is Now the structured if you want
[12:43] Now the structured if you want
[12:43] Now the structured if you want compactified new memory representation
[12:46] compactified new memory representation
[12:46] compactified new memory representation with this new methodology. So here we
[12:48] with this new methodology. So here we
[12:48] with this new methodology. So here we have now a case where the raw history
[12:50] have now a case where the raw history
[12:50] have now a case where the raw history works but this new structured memory
[12:53] works but this new structured memory
[12:53] works but this new structured memory fails. So this means the memory
[12:55] fails. So this means the memory
[12:55] fails. So this means the memory construction removed something
[12:57] construction removed something
[12:57] construction removed something important. We have simplest case maybe
[13:00] important. We have simplest case maybe
[13:00] important. We have simplest case maybe an information loss. So this is
[13:03] an information loss. So this is
[13:03] an information loss. So this is definitely a failure. But we record this
[13:05] definitely a failure. But we record this
[13:05] definitely a failure. But we record this failure because we want to learn from
[13:07] failure because we want to learn from
[13:07] failure because we want to learn from this fail. I mean the system wants to
[13:08] this fail. I mean the system wants to
[13:08] this fail. I mean the system wants to learn from this failure and optimize it
[13:11] learn from this failure and optimize it
[13:11] learn from this failure and optimize it coming out here after the failure. The
[13:13] coming out here after the failure. The
[13:13] coming out here after the failure. The second failure is an endo endogenous uh
[13:16] second failure is an endo endogenous uh
[13:16] second failure is an endo endogenous uh failure and and this is exactly the task
[13:19] failure and and this is exactly the task
[13:19] failure and and this is exactly the task where the opposite is happening. Now so
[13:22] where the opposite is happening. Now so
[13:22] where the opposite is happening. Now so this means the raw history fails but the
[13:25] this means the raw history fails but the
[13:25] this means the raw history fails but the structure the memory suddenly works. So
[13:27] structure the memory suddenly works. So
[13:27] structure the memory suddenly works. So this is great. So the organization of
[13:30] this is great. So the organization of
[13:30] this is great. So the organization of our knowledge of our data of the
[13:32] our knowledge of our data of the
[13:32] our knowledge of our data of the information now improve the reasoning
[13:34] information now improve the reasoning
[13:34] information now improve the reasoning capabilities. So this means the memory
[13:37] capabilities. So this means the memory
[13:37] capabilities. So this means the memory manager discovered now discovered trial
[13:40] manager discovered now discovered trial
[13:40] manager discovered now discovered trial and error some useful abstraction and
[13:43] and error some useful abstraction and
[13:43] and error some useful abstraction and they are working. So this is now
[13:46] they are working. So this is now
[13:46] they are working. So this is now extremely important because guess what
[13:47] extremely important because guess what
[13:47] extremely important because guess what we do? We ask now what is the delta
[13:50] we do? We ask now what is the delta
[13:50] we do? We ask now what is the delta exactly between the performance of H
[13:52] exactly between the performance of H
[13:52] exactly between the performance of H ddash and compare this to the
[13:54] ddash and compare this to the
[13:54] ddash and compare this to the performance of H and then if you know
[13:56] performance of H and then if you know
[13:56] performance of H and then if you know exactly what is the delta what is the
[13:59] exactly what is the delta what is the
[13:59] exactly what is the delta what is the difference here then we diagnose why
[14:01] difference here then we diagnose why
[14:02] difference here then we diagnose why well turns out not we but LLM does the
[14:04] well turns out not we but LLM does the
[14:04] well turns out not we but LLM does the diagnos but you got it now this is here
[14:07] diagnos but you got it now this is here
[14:07] diagnos but you got it now this is here absolutely beautifully combined here
[14:09] absolutely beautifully combined here
[14:09] absolutely beautifully combined here with the skill discovery because we
[14:13] with the skill discovery because we
[14:13] with the skill discovery because we remember we turn failures into
[14:15] remember we turn failures into
[14:15] remember we turn failures into explanation and now the system asks
[14:18] explanation and now the system asks
[14:18] explanation and now the system asks simply an LLM given now H and H ddash
[14:23] simply an LLM given now H and H ddash
[14:23] simply an LLM given now H and H ddash what went wrong or right. So now that we
[14:27] what went wrong or right. So now that we
[14:27] what went wrong or right. So now that we have H and H ddash, we need now an
[14:30] have H and H ddash, we need now an
[14:30] have H and H ddash, we need now an intelligent AI system that looks at this
[14:32] intelligent AI system that looks at this
[14:32] intelligent AI system that looks at this and understands the delta and
[14:34] and understands the delta and
[14:34] and understands the delta and understands why this delta was generated
[14:36] understands why this delta was generated
[14:36] understands why this delta was generated here by which algorithm by which
[14:38] here by which algorithm by which
[14:38] here by which algorithm by which methodology what happened in the process
[14:42] methodology what happened in the process
[14:42] methodology what happened in the process and this is if you want a new skill. We
[14:44] and this is if you want a new skill. We
[14:44] and this is if you want a new skill. We discover here a new skill here in the
[14:46] discover here a new skill here in the
[14:46] discover here a new skill here in the system by the LLM.
[14:49] system by the LLM.
[14:49] system by the LLM. So next step is of course the feedback
[14:51] So next step is of course the feedback
[14:51] So next step is of course the feedback because the LLM gives us something back.
[14:53] because the LLM gives us something back.
[14:53] because the LLM gives us something back. No, the LLM says, "Oh, okay. I looked at
[14:55] No, the LLM says, "Oh, okay. I looked at
[14:55] No, the LLM says, "Oh, okay. I looked at the instruction, I looked at H, I look
[14:57] the instruction, I looked at H, I look
[14:57] the instruction, I looked at H, I look at H dash, and I can give you now a
[14:59] at H dash, and I can give you now a
[14:59] at H dash, and I can give you now a feedback." And now for every task, this
[15:02] feedback." And now for every task, this
[15:02] feedback." And now for every task, this LLM is performing exactly this failure
[15:04] LLM is performing exactly this failure
[15:04] LLM is performing exactly this failure analysis. But careful now, as I told
[15:08] analysis. But careful now, as I told
[15:08] analysis. But careful now, as I told you, we have an extreme sparse
[15:11] you, we have an extreme sparse
[15:11] you, we have an extreme sparse weight assignment here. It is not RL. It
[15:14] weight assignment here. It is not RL. It
[15:14] weight assignment here. It is not RL. It is not a classical clear gradient
[15:16] is not a classical clear gradient
[15:16] is not a classical clear gradient descent, but it is something that you
[15:19] descent, but it is something that you
[15:19] descent, but it is something that you already know. We have now something
[15:21] already know. We have now something
[15:21] already know. We have now something beautiful in a natural language. This is
[15:25] beautiful in a natural language. This is
[15:25] beautiful in a natural language. This is here if you want here the natural
[15:27] here if you want here the natural
[15:27] here if you want here the natural language descent or a diagnosis here not
[15:30] language descent or a diagnosis here not
[15:30] language descent or a diagnosis here not in RL not in a numerical way but the LLM
[15:34] in RL not in a numerical way but the LLM
[15:34] in RL not in a numerical way but the LLM as a large language model produces here
[15:36] as a large language model produces here
[15:36] as a large language model produces here let's say an English text exactly. So
[15:39] let's say an English text exactly. So
[15:39] let's say an English text exactly. So instead of gradient behavior that we
[15:41] instead of gradient behavior that we
[15:42] instead of gradient behavior that we have now in a typical gradient descent
[15:44] have now in a typical gradient descent
[15:44] have now in a typical gradient descent we get something else. We get here a
[15:46] we get something else. We get here a
[15:46] we get something else. We get here a verbal instruction like hey the system
[15:48] verbal instruction like hey the system
[15:48] verbal instruction like hey the system was missing the entity tracking or there
[15:51] was missing the entity tracking or there
[15:51] was missing the entity tracking or there was too much noise in the logs or there
[15:53] was too much noise in the logs or there
[15:54] was too much noise in the logs or there was a poor temporal grouping I could not
[15:56] was a poor temporal grouping I could not
[15:56] was a poor temporal grouping I could not extract it to temporal dependencies or
[15:58] extract it to temporal dependencies or
[15:58] extract it to temporal dependencies or hey I just lost the causal chain here or
[16:01] hey I just lost the causal chain here or
[16:01] hey I just lost the causal chain here or whatever.
[16:02] whatever.
[16:02] whatever. So you see this feedback by the llm
[16:04] So you see this feedback by the llm
[16:04] So you see this feedback by the llm given here the delta between h and h uh
[16:07] given here the delta between h and h uh
[16:07] given here the delta between h and h uh dash is now exactly how we have here if
[16:11] dash is now exactly how we have here if
[16:11] dash is now exactly how we have here if you want our training. Now if we have
[16:13] you want our training. Now if we have
[16:13] you want our training. Now if we have discovered this we want to turn here the
[16:16] discovered this we want to turn here the
[16:16] discovered this we want to turn here the feedback with the LLM into some new
[16:18] feedback with the LLM into some new
[16:18] feedback with the LLM into some new memory rules because we are talking yes
[16:20] memory rules because we are talking yes
[16:20] memory rules because we are talking yes about skills but now the skills should
[16:22] about skills but now the skills should
[16:22] about skills but now the skills should be transferred into rules and those
[16:24] be transferred into rules and those
[16:24] be transferred into rules and those rules we want that the LLM learns that
[16:27] rules we want that the LLM learns that
[16:27] rules we want that the LLM learns that the agent learns therefore we want to
[16:29] the agent learns therefore we want to
[16:29] the agent learns therefore we want to burn it into the memory. Absolutely. So
[16:32] burn it into the memory. Absolutely. So
[16:32] burn it into the memory. Absolutely. So how we do this since we're working here
[16:35] how we do this since we're working here
[16:35] how we do this since we're working here in the in English language guess what we
[16:38] in the in English language guess what we
[16:38] in the in English language guess what we have simply a prompt update and new man
[16:41] have simply a prompt update and new man
[16:41] have simply a prompt update and new man said hey listen buddy we are 2026 we are
[16:43] said hey listen buddy we are 2026 we are
[16:43] said hey listen buddy we are 2026 we are still working with prompts absolutely
[16:46] still working with prompts absolutely
[16:46] still working with prompts absolutely since we are still working with large
[16:48] since we are still working with large
[16:48] since we are still working with large language mall
[16:50] language mall
[16:50] language mall so our prompt uh p_m or think of p as if
[16:54] so our prompt uh p_m or think of p as if
[16:54] so our prompt uh p_m or think of p as if you want a little bit more um elevated
[16:57] you want a little bit more um elevated
[16:57] you want a little bit more um elevated interpretation a memory architect
[16:59] interpretation a memory architect
[17:00] interpretation a memory architect instruction manual. Okay. So what do we
[17:03] instruction manual. Okay. So what do we
[17:03] instruction manual. Okay. So what do we have? We want to go here from here our
[17:05] have? We want to go here from here our
[17:05] have? We want to go here from here our prompt at a k + one. What is it now? It
[17:09] prompt at a k + one. What is it now? It
[17:09] prompt at a k + one. What is it now? It is now the answer of the llm given here
[17:11] is now the answer of the llm given here
[17:11] is now the answer of the llm given here the skill augmentation that we have and
[17:13] the skill augmentation that we have and
[17:14] the skill augmentation that we have and here the particular prompt here at the
[17:16] here the particular prompt here at the
[17:16] here the particular prompt here at the the structure key and the complete
[17:18] the structure key and the complete
[17:18] the structure key and the complete feedback by the lm given here the
[17:20] feedback by the lm given here the
[17:20] feedback by the lm given here the particular delta. All of this combined
[17:23] particular delta. All of this combined
[17:23] particular delta. All of this combined should now improve here our memory
[17:27] should now improve here our memory
[17:27] should now improve here our memory architect. So if you see this is now not
[17:30] architect. So if you see this is now not
[17:30] architect. So if you see this is now not a classical gradient. descent. But as I
[17:32] a classical gradient. descent. But as I
[17:32] a classical gradient. descent. But as I showed you, this is not a textual
[17:34] showed you, this is not a textual
[17:34] showed you, this is not a textual gradient descent. We encountered textual
[17:36] gradient descent. We encountered textual
[17:36] gradient descent. We encountered textual gradients in the last three months
[17:38] gradients in the last three months
[17:38] gradients in the last three months multiple time on multiple systems. So
[17:41] multiple time on multiple systems. So
[17:41] multiple time on multiple systems. So this this is nothing new or innovative.
[17:43] this this is nothing new or innovative.
[17:43] this this is nothing new or innovative. It was not never really applied here on
[17:46] It was not never really applied here on
[17:46] It was not never really applied here on this particular memory optimization
[17:49] this particular memory optimization
[17:49] this particular memory optimization structural memory optimization. And I
[17:51] structural memory optimization. And I
[17:51] structural memory optimization. And I know that you like examples. So give me
[17:53] know that you like examples. So give me
[17:53] know that you like examples. So give me I want to give you here a simple
[17:55] I want to give you here a simple
[17:55] I want to give you here a simple example. So we have our prompt here at a
[17:57] example. So we have our prompt here at a
[17:57] example. So we have our prompt here at a particular moment zero. We start here.
[17:59] particular moment zero. We start here.
[17:59] particular moment zero. We start here. We store some events. We track some
[18:02] We store some events. We track some
[18:02] We store some events. We track some entities and we summarize interaction.
[18:05] entities and we summarize interaction.
[18:05] entities and we summarize interaction. And then we go simply to the next step.
[18:07] And then we go simply to the next step.
[18:07] And then we go simply to the next step. Here's this formula that you see here.
[18:09] Here's this formula that you see here.
[18:10] Here's this formula that you see here. So, LLM rewrites now the instruction. It
[18:12] So, LLM rewrites now the instruction. It
[18:12] So, LLM rewrites now the instruction. It found some insert. It found some rules.
[18:14] found some insert. It found some rules.
[18:14] found some insert. It found some rules. It found some English optimization here.
[18:17] It found some English optimization here.
[18:17] It found some English optimization here. And now we go here to the next step here
[18:21] And now we go here to the next step here
[18:21] And now we go here to the next step here of our prompt optimization that is
[18:23] of our prompt optimization that is
[18:23] of our prompt optimization that is significant for the memory construction.
[18:26] significant for the memory construction.
[18:26] significant for the memory construction. And this is here to track entities with
[18:28] And this is here to track entities with
[18:28] And this is here to track entities with the ids or it says hey I have to
[18:30] the ids or it says hey I have to
[18:30] the ids or it says hey I have to preserve the temporal ordering of
[18:32] preserve the temporal ordering of
[18:32] preserve the temporal ordering of events. You see this is a new rule. It
[18:35] events. You see this is a new rule. It
[18:35] events. You see this is a new rule. It writes now into memory MD file or
[18:38] writes now into memory MD file or
[18:38] writes now into memory MD file or separate the noiser and the causal
[18:39] separate the noiser and the causal
[18:39] separate the noiser and the causal events given whatever. So we build now
[18:43] events given whatever. So we build now
[18:43] events given whatever. So we build now here our insights how to handle this. So
[18:47] here our insights how to handle this. So
[18:47] here our insights how to handle this. So you can say the orus if this is the the
[18:49] you can say the orus if this is the the
[18:49] you can say the orus if this is the the formulation by the orus they say this is
[18:51] formulation by the orus they say this is
[18:51] formulation by the orus they say this is the truly novel memory construction
[18:54] the truly novel memory construction
[18:54] the truly novel memory construction equation here for our particular paper
[18:58] equation here for our particular paper
[18:58] equation here for our particular paper here that we have a hierarchical memory
[19:00] here that we have a hierarchical memory
[19:00] here that we have a hierarchical memory construction and it is built exactly
[19:03] construction and it is built exactly
[19:03] construction and it is built exactly with this formula. So important to
[19:05] with this formula. So important to
[19:06] with this formula. So important to notice memory organization is not hand
[19:08] notice memory organization is not hand
[19:08] notice memory organization is not hand designed. You don't even start. Remember
[19:10] designed. You don't even start. Remember
[19:10] designed. You don't even start. Remember we just build a loop. This is exactly
[19:13] we just build a loop. This is exactly
[19:13] we just build a loop. This is exactly what we're doing. We say hey you're
[19:15] what we're doing. We say hey you're
[19:15] what we're doing. We say hey you're talking about prompts. Yeah. Wait a
[19:16] talking about prompts. Yeah. Wait a
[19:16] talking about prompts. Yeah. Wait a minute. I'm going to show you the loop.
[19:18] minute. I'm going to show you the loop.
[19:18] minute. I'm going to show you the loop. And here it evolves through accumulated
[19:20] And here it evolves through accumulated
[19:20] And here it evolves through accumulated experience and contrastive failure
[19:23] experience and contrastive failure
[19:23] experience and contrastive failure analysis. So this means updating the
[19:26] analysis. So this means updating the
[19:26] analysis. So this means updating the rules for how memory should be built.
[19:29] rules for how memory should be built.
[19:29] rules for how memory should be built. Looking at all the deltas, what is
[19:30] Looking at all the deltas, what is
[19:30] Looking at all the deltas, what is working, what is not working. Extract
[19:32] working, what is not working. Extract
[19:32] working, what is not working. Extract it, understand it, get the root cause,
[19:35] it, understand it, get the root cause,
[19:35] it, understand it, get the root cause, formulate it in a new rule, put this in
[19:37] formulate it in a new rule, put this in
[19:37] formulate it in a new rule, put this in a memory and we are done. Of course, we
[19:40] a memory and we are done. Of course, we
[19:40] a memory and we are done. Of course, we have to structure it.
[19:42] have to structure it.
[19:42] have to structure it. So, we need a better memory structure.
[19:45] So, we need a better memory structure.
[19:45] So, we need a better memory structure. So, this is now the next roll out on
[19:48] So, this is now the next roll out on
[19:48] So, this is now the next roll out on here on how it improves here our memory
[19:51] here on how it improves here our memory
[19:51] here on how it improves here our memory [clears throat] footprint.
[19:53] [clears throat] footprint.
[19:53] [clears throat] footprint. As we remember, I showed you here how we
[19:55] As we remember, I showed you here how we
[19:55] As we remember, I showed you here how we optimize this here from a time t to a
[19:57] optimize this here from a time t to a
[19:57] optimize this here from a time t to a time t + one. And the memory manager
[20:00] time t + one. And the memory manager
[20:00] time t + one. And the memory manager just now follows here the improved
[20:02] just now follows here the improved
[20:02] just now follows here the improved instruction and a new memory is
[20:05] instruction and a new memory is
[20:05] instruction and a new memory is structured now differently with every
[20:07] structured now differently with every
[20:07] structured now differently with every run with every loop we have here an
[20:09] run with every loop we have here an
[20:09] run with every loop we have here an optimization not only of the memory
[20:11] optimization not only of the memory
[20:11] optimization not only of the memory content but also of the memory structure
[20:14] content but also of the memory structure
[20:14] content but also of the memory structure itself.
[20:16] itself.
[20:16] itself. So now let's come and take here the next
[20:19] So now let's come and take here the next
[20:19] So now let's come and take here the next step in the abstraction level. Take a
[20:20] step in the abstraction level. Take a
[20:20] step in the abstraction level. Take a step back and look at all of this and
[20:22] step back and look at all of this and
[20:22] step back and look at all of this and you see there is a loop. There is a
[20:24] you see there is a loop. There is a
[20:24] you see there is a loop. There is a beautiful loop here. This selfarning
[20:27] beautiful loop here. This selfarning
[20:27] beautiful loop here. This selfarning memory construction for hierarchical
[20:30] memory construction for hierarchical
[20:30] memory construction for hierarchical memory structure.
[20:33] memory structure.
[20:33] memory structure. Homework is simple. It watches here how
[20:36] Homework is simple. It watches here how
[20:36] Homework is simple. It watches here how the agent fails. Beautiful. Of course,
[20:38] the agent fails. Beautiful. Of course,
[20:38] the agent fails. Beautiful. Of course, that's the start. Then in this delta
[20:42] that's the start. Then in this delta
[20:42] that's the start. Then in this delta looking at hon dash seeing what is the
[20:45] looking at hon dash seeing what is the
[20:45] looking at hon dash seeing what is the difference and try to explain the delta.
[20:47] difference and try to explain the delta.
[20:47] difference and try to explain the delta. We have an LLM that tries to explain why
[20:50] We have an LLM that tries to explain why
[20:50] We have an LLM that tries to explain why we have this delta.
[20:52] we have this delta.
[20:52] we have this delta. Understanding the delta, it writes now
[20:54] Understanding the delta, it writes now
[20:54] Understanding the delta, it writes now the LLM better rules for organizing the
[20:57] the LLM better rules for organizing the
[20:57] the LLM better rules for organizing the memory because we forgot about the
[20:59] memory because we forgot about the
[20:59] memory because we forgot about the temporal complexity or some dependency
[21:01] temporal complexity or some dependency
[21:01] temporal complexity or some dependency between some parameters. And then if we
[21:04] between some parameters. And then if we
[21:04] between some parameters. And then if we have the rules, we use those rules in
[21:06] have the rules, we use those rules in
[21:06] have the rules, we use those rules in the next optimization in the next run.
[21:10] the next optimization in the next run.
[21:10] the next optimization in the next run. And guess what? This here is now a loop.
[21:13] And guess what? This here is now a loop.
[21:13] And guess what? This here is now a loop. So when you hear now I don't know on
[21:15] So when you hear now I don't know on
[21:16] So when you hear now I don't know on social media we don't do prompt
[21:17] social media we don't do prompt
[21:17] social media we don't do prompt engineering anymore we do now loop
[21:19] engineering anymore we do now loop
[21:19] engineering anymore we do now loop engineering you see you just think about
[21:22] engineering you see you just think about
[21:22] engineering you see you just think about it on a systemic level you don't go to
[21:25] it on a systemic level you don't go to
[21:25] it on a systemic level you don't go to put in a prompt here but you think hey I
[21:28] put in a prompt here but you think hey I
[21:28] put in a prompt here but you think hey I have to think about maybe a
[21:29] have to think about maybe a
[21:29] have to think about maybe a self-development maybe a
[21:31] self-development maybe a
[21:31] self-development maybe a selfoptimization here from a
[21:33] selfoptimization here from a
[21:33] selfoptimization here from a mathematical point of view how can I
[21:35] mathematical point of view how can I
[21:35] mathematical point of view how can I improve here the representation of the
[21:37] improve here the representation of the
[21:37] improve here the representation of the knowledge here that is encoded in a
[21:40] knowledge here that is encoded in a
[21:40] knowledge here that is encoded in a memory MD file and this is done by the
[21:42] memory MD file and this is done by the
[21:42] memory MD file and this is done by the loop So loop engineering nothing
[21:45] loop So loop engineering nothing
[21:45] loop So loop engineering nothing specific it is just you have to look hey
[21:48] specific it is just you have to look hey
[21:48] specific it is just you have to look hey I have here a selfarning loop here we
[21:50] I have here a selfarning loop here we
[21:50] I have here a selfarning loop here we have dependencies and we have to take
[21:52] have dependencies and we have to take
[21:52] have dependencies and we have to take care about these dependencies. So the
[21:54] care about these dependencies. So the
[21:54] care about these dependencies. So the memory construction is learning how to
[21:57] memory construction is learning how to
[21:57] memory construction is learning how to write a file system because guess what
[21:59] write a file system because guess what
[21:59] write a file system because guess what the retriever will be a file system
[22:04] the retriever will be a file system
[22:04] the retriever will be a file system coming back but I told you we have a
[22:05] coming back but I told you we have a
[22:06] coming back but I told you we have a separation of formula we have here the
[22:08] separation of formula we have here the
[22:08] separation of formula we have here the memory construction that we went back
[22:10] memory construction that we went back
[22:10] memory construction that we went back that we went just through and then the
[22:12] that we went just through and then the
[22:12] that we went just through and then the retriever so summarizing now the memory
[22:16] retriever so summarizing now the memory
[22:16] retriever so summarizing now the memory construction this is if you want
[22:18] construction this is if you want
[22:18] construction this is if you want quotation mark a self-improving loop
[22:21] quotation mark a self-improving loop
[22:21] quotation mark a self-improving loop where the failures are turned into
[22:23] where the failures are turned into
[22:23] where the failures are turned into natural language rule we have kind of a
[22:26] natural language rule we have kind of a
[22:26] natural language rule we have kind of a gradient descent a textual gradient
[22:28] gradient descent a textual gradient
[22:28] gradient descent a textual gradient descent by instruction that redefine how
[22:31] descent by instruction that redefine how
[22:32] descent by instruction that redefine how future memories are organized. So the
[22:35] future memories are organized. So the
[22:35] future memories are organized. So the more mistakes we make the more why and
[22:38] more mistakes we make the more why and
[22:38] more mistakes we make the more why and the deeper explanation how these
[22:40] the deeper explanation how these
[22:40] the deeper explanation how these mistakes came into being how we can
[22:43] mistakes came into being how we can
[22:43] mistakes came into being how we can compensate these mistakes how we can
[22:45] compensate these mistakes how we can
[22:45] compensate these mistakes how we can provide solution to these mistakes and
[22:47] provide solution to these mistakes and
[22:47] provide solution to these mistakes and all this are now stored here over the
[22:49] all this are now stored here over the
[22:49] all this are now stored here over the skill improvement into the memory
[22:51] skill improvement into the memory
[22:51] skill improvement into the memory markdown file.
[22:54] markdown file.
[22:54] markdown file. Yeah, as I told you breakdown this the
[22:57] Yeah, as I told you breakdown this the
[22:57] Yeah, as I told you breakdown this the decoupling the memory construction here
[23:00] decoupling the memory construction here
[23:00] decoupling the memory construction here with the textual gradient descent but
[23:03] with the textual gradient descent but
[23:03] with the textual gradient descent but the retrieval now now that we have the
[23:05] the retrieval now now that we have the
[23:05] the retrieval now now that we have the memory constructed in this beautiful new
[23:07] memory constructed in this beautiful new
[23:07] memory constructed in this beautiful new way we just have here the retrieval now
[23:10] way we just have here the retrieval now
[23:10] way we just have here the retrieval now you could say okay rack but come on we
[23:13] you could say okay rack but come on we
[23:13] you could say okay rack but come on we are a little bit nicer so this operates
[23:15] are a little bit nicer so this operates
[23:15] are a little bit nicer so this operates here directly on the execution path so
[23:18] here directly on the execution path so
[23:18] here directly on the execution path so we need a retriever and guess what it is
[23:20] we need a retriever and guess what it is
[23:20] we need a retriever and guess what it is an LLM surprise surprise So to train now
[23:23] an LLM surprise surprise So to train now
[23:23] an LLM surprise surprise So to train now the retriever LLM without updating here
[23:26] the retriever LLM without updating here
[23:26] the retriever LLM without updating here a complete model and providing you tons
[23:29] a complete model and providing you tons
[23:29] a complete model and providing you tons of training data what we do or what your
[23:31] of training data what we do or what your
[23:31] of training data what we do or what your artist did I take here a lightweight
[23:34] artist did I take here a lightweight
[23:34] artist did I take here a lightweight open model like Q13.54
[23:36] open model like Q13.54
[23:36] open model like Q13.54 billion so really a tiny little model
[23:39] billion so really a tiny little model
[23:39] billion so really a tiny little model and post train it here with a
[23:41] and post train it here with a
[23:41] and post train it here with a reinforcement learning algorithm have
[23:43] reinforcement learning algorithm have
[23:43] reinforcement learning algorithm have the perfect alignment here and of course
[23:46] the perfect alignment here and of course
[23:46] the perfect alignment here and of course they used for reinforcement learning or
[23:47] they used for reinforcement learning or
[23:47] they used for reinforcement learning or a good old friend of group relative
[23:49] a good old friend of group relative
[23:49] a good old friend of group relative policy optimization GRPO standard
[23:52] policy optimization GRPO standard
[23:52] policy optimization GRPO standard procedure.
[23:55] procedure.
[23:55] procedure. So you see retrieval is now formulated
[23:58] So you see retrieval is now formulated
[23:58] So you see retrieval is now formulated different. Retrieval is formulated as a
[24:00] different. Retrieval is formulated as a
[24:00] different. Retrieval is formulated as a localized grounded decision-making
[24:02] localized grounded decision-making
[24:02] localized grounded decision-making process over some executable file system
[24:06] process over some executable file system
[24:06] process over some executable file system operations. And what are those? The
[24:08] operations. And what are those? The
[24:08] operations. And what are those? The retriever output a discrete sequence of
[24:10] retriever output a discrete sequence of
[24:10] retriever output a discrete sequence of bash tokens that it had learn had to
[24:13] bash tokens that it had learn had to
[24:13] bash tokens that it had learn had to learn. And those are the bash tokens
[24:15] learn. And those are the bash tokens
[24:15] learn. And those are the bash tokens that the orers operated with in this
[24:18] that the orers operated with in this
[24:18] that the orers operated with in this particular example.
[24:20] particular example.
[24:20] particular example. So beautiful. So here we have the first
[24:22] So beautiful. So here we have the first
[24:22] So beautiful. So here we have the first screenshot here, figure one of this new
[24:25] screenshot here, figure one of this new
[24:25] screenshot here, figure one of this new preprint here and you have everything we
[24:28] preprint here and you have everything we
[24:28] preprint here and you have everything we just went through. Yeah, you have the
[24:30] just went through. Yeah, you have the
[24:30] just went through. Yeah, you have the long horizon agent problem. What to
[24:32] long horizon agent problem. What to
[24:32] long horizon agent problem. What to write after 8 hours into the memory? You
[24:35] write after 8 hours into the memory? You
[24:35] write after 8 hours into the memory? You cannot just fill up everything. Then you
[24:38] cannot just fill up everything. Then you
[24:38] cannot just fill up everything. Then you have the management agent here. The
[24:41] have the management agent here. The
[24:41] have the management agent here. The memory management via the skill
[24:43] memory management via the skill
[24:43] memory management via the skill evolution. We have a hierarchical memory
[24:45] evolution. We have a hierarchical memory
[24:45] evolution. We have a hierarchical memory tree that we develop. We have a
[24:47] tree that we develop. We have a
[24:47] tree that we develop. We have a recursive skill refinement. And then we
[24:50] recursive skill refinement. And then we
[24:50] recursive skill refinement. And then we have a ragle retrieval agent with a
[24:53] have a ragle retrieval agent with a
[24:53] have a ragle retrieval agent with a agentic [clears throat] memory retrieval
[24:55] agentic [clears throat] memory retrieval
[24:55] agentic [clears throat] memory retrieval with some agentic bash tools I just
[24:57] with some agentic bash tools I just
[24:57] with some agentic bash tools I just showed you. And then we have a
[24:59] showed you. And then we have a
[24:59] showed you. And then we have a reinforcement learning optimization
[25:02] reinforcement learning optimization
[25:02] reinforcement learning optimization via GRPO. And they had here a testing
[25:06] via GRPO. And they had here a testing
[25:06] via GRPO. And they had here a testing done on the system on three system on
[25:08] done on the system on three system on
[25:08] done on the system on three system on three benchmark. This is Alfred Locomo
[25:11] three benchmark. This is Alfred Locomo
[25:11] three benchmark. This is Alfred Locomo and the long memory evaluation.
[25:13] and the long memory evaluation.
[25:13] and the long memory evaluation. Beautiful.
[25:14] Beautiful.
[25:14] Beautiful. And we have some uh results. So I think
[25:18] And we have some uh results. So I think
[25:18] And we have some uh results. So I think it's time. Yes to show you at first the
[25:21] it's time. Yes to show you at first the
[25:21] it's time. Yes to show you at first the study this is done by Duke University
[25:23] study this is done by Duke University
[25:23] study this is done by Duke University and Snowflake EI research title was
[25:27] and Snowflake EI research title was
[25:27] and Snowflake EI research title was organize then retrieve. So you see the
[25:29] organize then retrieve. So you see the
[25:29] organize then retrieve. So you see the memory organization and then the
[25:31] memory organization and then the
[25:31] memory organization and then the retrieve of this memory hierarchical
[25:34] retrieve of this memory hierarchical
[25:34] retrieve of this memory hierarchical memory navigation for efficient agents
[25:37] memory navigation for efficient agents
[25:37] memory navigation for efficient agents and they have here this new methodology
[25:39] and they have here this new methodology
[25:39] and they have here this new methodology they call homer and the operation is for
[25:42] they call homer and the operation is for
[25:42] they call homer and the operation is for the hierarchical organize and retrieve
[25:45] the hierarchical organize and retrieve
[25:45] the hierarchical organize and retrieve memory agent. So we have an agent for
[25:49] memory agent. So we have an agent for
[25:49] memory agent. So we have an agent for everything.
[25:50] everything.
[25:50] everything. Yeah, the numerical results are not
[25:52] Yeah, the numerical results are not
[25:52] Yeah, the numerical results are not really that okay, but let's have a look
[25:55] really that okay, but let's have a look
[25:55] really that okay, but let's have a look at this here. The benchmark locomo and
[25:57] at this here. The benchmark locomo and
[25:57] at this here. The benchmark locomo and long memory evaluation for our two
[25:59] long memory evaluation for our two
[25:59] long memory evaluation for our two benchmark. And you see here they give
[26:01] benchmark. And you see here they give
[26:01] benchmark. And you see here they give you the data for the internal static
[26:03] you the data for the internal static
[26:03] you the data for the internal static memory for the internal dynamic memory
[26:05] memory for the internal dynamic memory
[26:05] memory for the internal dynamic memory and for the external dynamic memory.
[26:07] and for the external dynamic memory.
[26:07] and for the external dynamic memory. Here you have a me zero and embedding
[26:10] Here you have a me zero and embedding
[26:10] Here you have a me zero and embedding retrieval and you have this new hormer
[26:12] retrieval and you have this new hormer
[26:12] retrieval and you have this new hormer here in the very last line. And you see
[26:14] here in the very last line. And you see
[26:14] here in the very last line. And you see there's quite a lot of bold numerical
[26:17] there's quite a lot of bold numerical
[26:17] there's quite a lot of bold numerical indicators. So this means it is really
[26:20] indicators. So this means it is really
[26:20] indicators. So this means it is really outperforming to a large extent all the
[26:23] outperforming to a large extent all the
[26:23] outperforming to a large extent all the other models. Being
[26:26] other models. Being
[26:26] other models. Being okay. Yeah. What else can I tell you? As
[26:29] okay. Yeah. What else can I tell you? As
[26:29] okay. Yeah. What else can I tell you? As a result, hormone improves the
[26:30] a result, hormone improves the
[26:30] a result, hormone improves the performance under some constrained
[26:32] performance under some constrained
[26:32] performance under some constrained context budget. This is nice. What is
[26:35] context budget. This is nice. What is
[26:35] context budget. This is nice. What is even nicer? Hormone generalizes to
[26:37] even nicer? Hormone generalizes to
[26:37] even nicer? Hormone generalizes to unseen task. Because if you really have
[26:41] unseen task. Because if you really have
[26:41] unseen task. Because if you really have a deep knowledge why there's a delta,
[26:44] a deep knowledge why there's a delta,
[26:44] a deep knowledge why there's a delta, why a compactification of a memory is
[26:47] why a compactification of a memory is
[26:47] why a compactification of a memory is working and the raw memory is not
[26:49] working and the raw memory is not
[26:49] working and the raw memory is not working, you have discovered something.
[26:52] working, you have discovered something.
[26:52] working, you have discovered something. This transcribes
[26:54] This transcribes
[26:54] This transcribes over here also to unseen task. If you're
[26:58] over here also to unseen task. If you're
[26:58] over here also to unseen task. If you're working here in the same domain and and
[27:00] working here in the same domain and and
[27:00] working here in the same domain and and what's really interesting here, result
[27:02] what's really interesting here, result
[27:02] what's really interesting here, result three and this is the most important for
[27:04] three and this is the most important for
[27:04] three and this is the most important for me personally in long conversation task
[27:06] me personally in long conversation task
[27:06] me personally in long conversation task that you have. If your agent or the
[27:08] that you have. If your agent or the
[27:08] that you have. If your agent or the agent is doing here for half an hour and
[27:10] agent is doing here for half an hour and
[27:10] agent is doing here for half an hour and hours your jobs, it requires at most 22%
[27:14] hours your jobs, it requires at most 22%
[27:14] hours your jobs, it requires at most 22% of the baseline token usage of the other
[27:16] of the baseline token usage of the other
[27:16] of the baseline token usage of the other models.
[27:18] models.
[27:18] models. And this is exactly as I showed you at
[27:20] And this is exactly as I showed you at
[27:20] And this is exactly as I showed you at the beginning if you have a five-step
[27:22] the beginning if you have a five-step
[27:22] the beginning if you have a five-step hierarchy that we can beautifully encode
[27:25] hierarchy that we can beautifully encode
[27:26] hierarchy that we can beautifully encode here the complexity into dependency of
[27:28] here the complexity into dependency of
[27:28] here the complexity into dependency of 100,000 elements. So therefore, oh yeah,
[27:31] 100,000 elements. So therefore, oh yeah,
[27:31] 100,000 elements. So therefore, oh yeah, this is so much more token efficient and
[27:34] this is so much more token efficient and
[27:34] this is so much more token efficient and therefore cheaper and faster.
[27:39] therefore cheaper and faster.
[27:39] therefore cheaper and faster. So let's take a step back. What this
[27:40] So let's take a step back. What this
[27:40] So let's take a step back. What this study showed us if you want talking
[27:42] study showed us if you want talking
[27:42] study showed us if you want talking about memory I think we should or this
[27:44] about memory I think we should or this
[27:44] about memory I think we should or this the orcas have the impression we should
[27:47] the orcas have the impression we should
[27:47] the orcas have the impression we should reframe the memory and how we handle
[27:49] reframe the memory and how we handle
[27:49] reframe the memory and how we handle memory in current AI system not how do
[27:52] memory in current AI system not how do
[27:52] memory in current AI system not how do we retrieve information. How do we have
[27:55] we retrieve information. How do we have
[27:55] we retrieve information. How do we have here the knowledge retrieved here via
[27:57] here the knowledge retrieved here via
[27:57] here the knowledge retrieved here via rack system or the skill development
[27:59] rack system or the skill development
[28:00] rack system or the skill development decoupled here from memory um
[28:03] decoupled here from memory um
[28:03] decoupled here from memory um instruction but we should see this here
[28:05] instruction but we should see this here
[28:05] instruction but we should see this here together. How should experiences here by
[28:08] together. How should experiences here by
[28:08] together. How should experiences here by the AI agent? So the success and all the
[28:11] the AI agent? So the success and all the
[28:11] the AI agent? So the success and all the failure rates be organized before the
[28:14] failure rates be organized before the
[28:14] failure rates be organized before the retrieval ever happens. So we have an
[28:17] retrieval ever happens. So we have an
[28:17] retrieval ever happens. So we have an active learning process here in the
[28:19] active learning process here in the
[28:19] active learning process here in the agent and I showed you how to build the
[28:21] agent and I showed you how to build the
[28:21] agent and I showed you how to build the delta, analyze the delta, come up with
[28:24] delta, analyze the delta, come up with
[28:24] delta, analyze the delta, come up with some feedback on the delta and how to
[28:26] some feedback on the delta and how to
[28:26] some feedback on the delta and how to extract from this delta here rules,
[28:29] extract from this delta here rules,
[28:29] extract from this delta here rules, insights and maybe some instruction that
[28:32] insights and maybe some instruction that
[28:32] insights and maybe some instruction that we put then in a skill development but
[28:35] we put then in a skill development but
[28:35] we put then in a skill development but primarily in our skill MD in our memory
[28:38] primarily in our skill MD in our memory
[28:38] primarily in our skill MD in our memory MD files to remember that the agents
[28:41] MD files to remember that the agents
[28:41] MD files to remember that the agents remember here the solution that we
[28:43] remember here the solution that we
[28:43] remember here the solution that we found.
[28:45] found.
[28:45] found. So therefore everyone this is a new
[28:47] So therefore everyone this is a new
[28:47] So therefore everyone this is a new memory management system that is
[28:50] memory management system that is
[28:50] memory management system that is combined now with a skill evolution. I
[28:52] combined now with a skill evolution. I
[28:52] combined now with a skill evolution. I think this is real nice. I have to test
[28:54] think this is real nice. I have to test
[28:54] think this is real nice. I have to test it out myself and the orers tell us hey
[28:57] it out myself and the orers tell us hey
[28:57] it out myself and the orers tell us hey we need to stop asking how to retrieve
[28:59] we need to stop asking how to retrieve
[28:59] we need to stop asking how to retrieve the information B rag rough rack
[29:02] the information B rag rough rack
[29:02] the information B rag rough rack whatever you have and start asking how
[29:04] whatever you have and start asking how
[29:04] whatever you have and start asking how experiences should be organized or
[29:07] experiences should be organized or
[29:07] experiences should be organized or should be learned should be stored away
[29:10] should be learned should be stored away
[29:10] should be learned should be stored away before any retrieval ever happens with
[29:13] before any retrieval ever happens with
[29:14] before any retrieval ever happens with rack system or whatever system that you
[29:15] rack system or whatever system that you
[29:15] rack system or whatever system that you prefer for the knowledge or data
[29:17] prefer for the knowledge or data
[29:17] prefer for the knowledge or data retrieval. So what a beautiful study
[29:20] retrieval. So what a beautiful study
[29:20] retrieval. So what a beautiful study published June 10, 2026. There's so much
[29:24] published June 10, 2026. There's so much
[29:24] published June 10, 2026. There's so much possibility to optimize here the harness
[29:27] possibility to optimize here the harness
[29:27] possibility to optimize here the harness runtime. And here we just looked here at
[29:30] runtime. And here we just looked here at
[29:30] runtime. And here we just looked here at the memory optimization here that is
[29:32] the memory optimization here that is
[29:32] the memory optimization here that is combined here with a skill evolution. I
[29:35] combined here with a skill evolution. I
[29:35] combined here with a skill evolution. I hope I provided some new ideas. You got
[29:37] hope I provided some new ideas. You got
[29:37] hope I provided some new ideas. You got some new facts. Maybe you want to try it
[29:38] some new facts. Maybe you want to try it
[29:38] some new facts. Maybe you want to try it out yourself. Anyway, it would be great
[29:40] out yourself. Anyway, it would be great
[29:40] out yourself. Anyway, it would be great to see you in my next
