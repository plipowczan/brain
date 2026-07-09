---
source: VentureBeat
title: "AI agent tool routing cuts token use 99%"
url: "https://venturebeat.com/orchestration/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99"
author: "Ben Dickson"
publishedAt: 2026-07-02T20:54:12.000Z
ingested: 2026-07-08
---

# AI agent tool routing cuts token use 99% | VentureBeat

As enterprise AI systems scale to handle complex workflows, practitioners face the challenge of routing subtasks to the right tools and skills. Agents can have hundreds of tools and skills and get confused on which one to use for each step of a workflow.

To address this challenge, researchers at Alibaba developed SkillWeaver, a framework that creates an execution graph for a given task and chooses the right skills for each of the nodes. They also introduce Skill-Aware Decomposition (SAD), a novel technique that uses a feedback loop to enable the agent to fetch and vet relevant tool candidates iteratively. This compositional approach and feedback loop mechanism distinguishes SkillWeaver from other tool-routing frameworks that choose tools in a one-shot fashion.

SkillWeaver relates to real-world AI applications where agents autonomously orchestrate multi-tool ecosystems, such as the Model Context Protocol (MCP), to execute multi-step business operations like downloading datasets, transforming information, and creating visual reports.

In practice, the researchers' experiments with SkillWeaver show that implementing this retrieve-and-route approach significantly increases accuracy while reducing token consumption by over 99% compared to naively exposing agents to an entire tool library.

For practitioners building AI agents, the main takeaway is that the granularity of task decomposition is the biggest bottleneck to accurate tool retrieval.

## The challenge of skill routing

Skills are a key pattern in modern LLM agent architectures. A skill is a modular, reusable tool specification that uses structured natural language documentation.

As enterprise agents integrate with massive tool ecosystems, accurately routing user queries to the right skills becomes a difficult task. Exposing an entire library to an LLM to find the right tool is highly inefficient, quickly overwhelms context limits, and consumes hundreds of thousands of tokens.

Most current tool-use frameworks attempt to solve this through API retrieval, documentation matching, or hierarchical structures that treat routing strictly as a single-skill selection or per-step problem.

However, this single-skill paradigm is insufficient for enterprise environments because real-world queries are inherently compositional. A standard business request such as "Download the dataset, transform it, and create visual reports" cannot be fulfilled by one tool. It requires breaking the prompt down and sequencing an API client, a data processor, and a visualization tool into a cohesive, multi-step execution plan.

## How SkillWeaver and SAD work

To tackle this, the researchers frame the problem of handling complex tasks that require multiple skills as "compositional skill routing." Given a complex user prompt and a vast library of tools, an agent must simultaneously figure out how to break the request into a sequence of atomic sub-tasks, how to map each sub-task to the single best available skill, and how to compose those skills into an executable plan.

SkillWeaver orchestrates this process through three distinct stages: Decompose, Retrieve, and Compose. In the first stage, an LLM acts as a task decomposer, breaking the user's complex query down into a sequence of sub-tasks that each require one skill. Once the sub-tasks are clearly defined, the system uses an embedding model to compare each subtask against the skill library to pull a shortlist of the top candidate tools for each step.

In the final stage, a planner evaluates the retrieved candidates based on how well they work together. It checks for inter-skill compatibility to ensure the outputs of one tool naturally flow into the inputs of the next. It then creates a final execution plan as a Directed Acyclic Graph (DAG) that maps out dependencies so independent tasks can potentially execute in parallel.

For example, consider a user asking an AI agent to "Download the dataset, transform it, and create visual reports." In the decompose stage, the decomposer LLM breaks this into three distinct sub-tasks: downloading the dataset, transforming the data, and creating the reports.

In the retrieve stage, the system searches the library and finds candidates like "api-client" or "http-fetch" for task one, "csv-parser" or "etl-pipeline" for task two, and so on. Finally, the compose stage evaluates these options, selects the specific combination of "api-client," "csv-parser," and "chart-gen" that are most compatible, and wires them together into a final, ready-to-execute workflow.

A key challenge of this pipeline is that LLMs often produce generic step descriptions that fail to match the specific, technical vocabulary of the actual skills available in the library. To fix this, SkillWeaver introduces Iterative Skill-Aware Decomposition (SAD), a novel feedback loop. SAD works by having the LLM draft an initial plan, conducting a preliminary search to find loosely matching skills, and then feeding those retrieved skills back into the LLM as hints. This allows the LLM to rewrite its decomposition so the granularity and vocabulary perfectly align with the actual tools that exist.

## SkillWeaver in action

To evaluate how SkillWeaver performs in realistic enterprise scenarios, the researchers created a custom benchmark called CompSkillBench. It consists of 300 multi-step queries of different difficulty levels. To mirror real-world environments, they used a library of 2,209 real-world skills sourced from the public MCP ecosystem, covering 24 functional categories like cloud infrastructure, finance, and databases.

For the core engine, the researchers primarily used a lightweight 7-billion parameter model (Qwen2.5-7B-Instruct) for task decomposition, paired with a standard semantic search retriever (MiniLM with a FAISS index) to find the tools. SkillWeaver was evaluated against three main setups: a brute-force "LLM-Direct" method where they stuffed all the tool names into the prompt of a large model, a vanilla LLM-based decomposition without SAD, and a ReAct-style agent loop.

The experiments indicate that task decomposition is the main bottleneck. Standard LLM behavior falls short when dealing with large tool libraries, but the SAD feedback loop dramatically moves the needle. In the vanilla setup, the 7B model achieved a decomposition accuracy (i.e., predicting the correct number of steps) only 51.0% of the time. By activating the SAD feedback loop, accuracy jumped to 67.7% (with the larger Qwen-Max model, the accuracy reached 92%). On "hard" tasks requiring four to five distinct skills, SAD improved accuracy by 50%.

One fascinating finding was that larger models can actually perform worse when unguided. When tested in the vanilla setup, a larger 14-billion parameter model saw its accuracy plummet below the 7B model's accuracy because it tended to over-decompose tasks into microscopic, unnecessary steps. Once SAD was introduced, the retrieved tool hints anchored the model back to reality and increased its accuracy. This suggests that aligning an agent with the vocabulary of specific tools is often more impactful than paying for a larger, more expensive LLM.

Another important takeaway is token savings. The LLM-Direct baseline, which used the very large Qwen-Max model, showed that feeding all tools into the prompt of a large model fails. Despite near-perfect task breakdown capabilities, the massive model only retrieved the right tool category 21.1% of the time when flooded with tool options. SkillWeaver's targeted retrieve-and-route approach vastly outperformed this in accuracy while slashing context window consumption from an estimated 884,000 tokens down to roughly 1,160 tokens per query, a 99.9% reduction. For practitioners, this translates directly to drastically lower API costs and faster response times.

Finally, the traditional ReAct baseline completely failed, achieving 0% decomposition accuracy. Its loop naturally collapses multi-step plans into isolated actions rather than explicitly mapping out a cohesive, multi-tool sequence.

## Considerations for developers

While the researchers have not yet released the source code for SkillWeaver, their work was built on off-the-shelf tools that can easily be reproduced.

Skill-Aware Decomposition (SAD), which is the key innovation at the heart of the framework, is a clever prompt-engineering and retrieval loop. The authors have shared the prompt templates in their paper, and developers can implement it themselves quite easily using standard orchestration libraries like LangChain, LlamaIndex, or even raw Python scripts.

As for the retrieval component, the authors built the core framework using all-MiniLM-L6-v2, an open-source embedding model. They found that swapping in a slightly stronger off-the-shelf encoder (BGE-base-en-v1.5) immediately boosted accuracy without any fine-tuning. While an off-the-shelf bi-encoder is great at getting a relevant tool into the top 10 candidates nearly 70% of the time, it struggles to consistently rank the perfect tool at exactly number one, achieving that only about 37% of the time. To bridge this gap, teams will likely need to implement a secondary cross-encoder or LLM-based reranker to re-order those top 10 candidates.

One upfront preparation requirement is vectorizing the tool library and building a FAISS index in advance. In practice, this is a negligible hurdle. Embedding and indexing all 2,209 skills in the benchmark took a mere 15 seconds. Once built, retrieving tools from the index adds less than 15 milliseconds of latency per query. For enterprise environments, syncing the tool index is a trivial background job.

A current limitation in SkillWeaver is the lack of error recovery. While SkillWeaver successfully maps out a compatible DAG for execution, the authors' pilot study revealed the challenges of multi-step tool chains. For example, if an API call fails in step two, the entire chain breaks. The paper's core contribution is limited to the routing and planning phase. For a true production deployment, practitioners must build their own error recovery, fallback, and retry mechanisms on top of the compose stage to handle real-world API timeouts or malformed outputs.
