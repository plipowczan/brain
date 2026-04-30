---
title: "HKUDS/LightRAG: [EMNLP2025] \"LightRAG: Simple and Fast Retrieval-Augmented Generation\""
source: "https://github.com/HKUDS/LightRAG"
author:
published:
created: 2026-04-29
description: "[EMNLP2025] \"LightRAG: Simple and Fast Retrieval-Augmented Generation\" - HKUDS/LightRAG"
tags:
  - "clippings"
---
[![[e2e1335826a795c7621ca7a0686bc65d_MD5.png]]](https://github.com/HKUDS/LightRAG/blob/main/assets/logo.png)

## 🚀 LightRAG: Simple and Fast Retrieval-Augmented Generation

[![[c340df969757e92d6cbe3ae6ad7a697c_MD5.svg]]](https://trendshift.io/repositories/13043)

[![[1103b047b5d549aafc20548bac9c3830_MD5.png]]](https://github.com/HKUDS/LightRAG/blob/main/README.assets/b2aaf634151b4706892693ffb43d9093.png)

---

| [![[529f503461f4aeb7711d6acb1124e757_MD5.png]]](https://github.com/HKUDS/LightRAG/blob/main/assets/LiteWrite.png) |  |
| --- | --- |

---

## 🎉 News

- \[2026.03\]🎯\[New Feature\]: Integrated **OpenSearch** as a unified storage backend, providing comprehensive support for all four LightRAG storage.
- \[2026.03\]🎯\[New Feature\]: Introduced a setup wizard. Support for local deployment of embedding, reranking, and storage backends via Docker.
- \[2025.11\]🎯\[New Feature\]: Integrated **RAGAS for Evaluation** and **Langfuse for Tracing**. Updated the API to return retrieved contexts alongside query results to support context precision metrics.
- \[2025.10\]🎯\[Scalability Enhancement\]: Eliminated processing bottlenecks to support **Large-Scale Datasets Efficiently**.
- \[2025.09\]🎯\[New Feature\] Enhances knowledge graph extraction accuracy for **Open-Sourced LLMs** such as Qwen3-30B-A3B.
- \[2025.08\]🎯\[New Feature\] **Reranker** is now supported, significantly boosting performance for mixed queries (set as default query mode).
- \[2025.08\]🎯\[New Feature\] Added **Document Deletion** with automatic KG regeneration to ensure optimal query performance.
- \[2025.06\]🎯\[New Release\] Our team has released [RAG-Anything](https://github.com/HKUDS/RAG-Anything) — an **All-in-One Multimodal RAG** system for seamless processing of text, images, tables, and equations.
- \[2025.06\]🎯\[New Feature\] LightRAG now supports comprehensive multimodal data handling through [RAG-Anything](https://github.com/HKUDS/RAG-Anything) integration, enabling seamless document parsing and RAG capabilities across diverse formats including PDFs, images, Office documents, tables, and formulas. Please refer to the new [multimodal section](https://github.com/HKUDS/LightRAG/?tab=readme-ov-file#multimodal-document-processing-rag-anything-integration) for details.
- \[2025.03\]🎯\[New Feature\] LightRAG now supports citation functionality, enabling proper source attribution and enhanced document traceability.
- \[2025.02\]🎯\[New Feature\] You can now use MongoDB as an all-in-one storage solution for unified data management.
- \[2025.02\]🎯\[New Release\] Our team has released [VideoRAG](https://github.com/HKUDS/VideoRAG) -a RAG system for understanding extremely long-context videos
- \[2025.01\]🎯\[New Release\] Our team has released [MiniRAG](https://github.com/HKUDS/MiniRAG) making RAG simpler with small models.
- \[2025.01\]🎯You can now use PostgreSQL as an all-in-one storage solution for data management.
- \[2024.11\]🎯\[New Resource\] A comprehensive guide to LightRAG is now available on [LearnOpenCV](https://learnopencv.com/lightrag). — explore in-depth tutorials and best practices. Many thanks to the blog author for this excellent contribution!
- \[2024.11\]🎯\[New Feature\] Introducing the LightRAG WebUI — an interface that allows you to insert, query, and visualize LightRAG knowledge through an intuitive web-based dashboard.
- \[2024.11\]🎯\[New Feature\] You can now [use Neo4J for Storage](https://github.com/HKUDS/LightRAG?tab=readme-ov-file#using-neo4j-for-storage) -enabling graph database support.
- \[2024.10\]🎯\[New Feature\] We've added a link to a [LightRAG Introduction Video](https://youtu.be/oageL-1I0GE). — a walkthrough of LightRAG's capabilities. Thanks to the author for this excellent contribution!
- \[2024.10\]🎯\[New Channel\] We have created a [Discord channel](https://discord.gg/yF2MmDJyGJ)!💬 Welcome to join our community for sharing, discussions, and collaboration! 🎉🎉
Algorithm Flowchart

[![[77d46d84f05fe32d22ae52c6af7f68b9_MD5.jpg]]](https://camo.githubusercontent.com/4ebd2af368fedff45d7ab3b59f588cb1a7e5223aac7bcf668423de9402ebb49d/68747470733a2f2f6c6561726e6f70656e63762e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032342f31312f4c696768745241472d566563746f7244422d4a736f6e2d4b562d53746f72652d496e646578696e672d466c6f7763686172742d7363616c65642e6a7067) *Figure 1: LightRAG Indexing Flowchart - Img Caption: [Source](https://learnopencv.com/lightrag/)* [![[309f98a2673e08706af713857a8c23a0_MD5.jpg]]](https://camo.githubusercontent.com/f0366b75effc7277c7e4167ec88727e3271e61991aa38bed23542ddfebc71efc/68747470733a2f2f6c6561726e6f70656e63762e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032342f31312f4c696768745241472d5175657279696e672d466c6f7763686172742d4475616c2d4c6576656c2d52657472696576616c2d47656e65726174696f6e2d4b6e6f776c656467652d4772617068732d7363616c65642e6a7067) *Figure 2: LightRAG Retrieval and Querying Flowchart - Img Caption: [Source](https://learnopencv.com/lightrag/)*

## Installation

**💡 Using uv for Package Management**: This project uses [uv](https://docs.astral.sh/uv/) for fast and reliable Python package management. Install uv first: `curl -LsSf https://astral.sh/uv/install.sh | sh` (Unix/macOS) or `powershell -c "irm https://astral.sh/uv/install.ps1 | iex"` (Windows)

> **Note**: You can also use pip if you prefer, but uv is recommended for better performance and more reliable dependency management.
> 
> **📦 Offline Deployment**: For offline or air-gapped environments, see the [Offline Deployment Guide](https://github.com/HKUDS/LightRAG/blob/main/docs/OfflineDeployment.md) for instructions on pre-installing all dependencies and cache files.

### Install LightRAG Server

The LightRAG Server is designed to provide Web UI and API support. The Web UI facilitates document indexing, knowledge graph exploration, and a simple RAG query interface. LightRAG Server also provide an Ollama compatible interfaces, aiming to emulate LightRAG as an Ollama chat model. This allows AI chat bot, such as Open WebUI, to access LightRAG easily.

- Install from PyPI
```
### Install LightRAG Server as tool using uv (recommended)
uv tool install "lightrag-hku[api]"

### Or using pip
# python -m venv .venv
# source .venv/bin/activate  # Windows: .venv\Scripts\activate
# pip install "lightrag-hku[api]"

### Build front-end artifacts
cd lightrag_webui
bun install --frozen-lockfile
bun run build
cd ..

# Setup env file
# Obtain the env.example file by downloading it from the GitHub repository root
# or by copying it from a local source checkout.
cp env.example .env  # Update the .env with your LLM and embedding configurations
# Launch the server
lightrag-server
```
- Installation from Source
```
git clone https://github.com/HKUDS/LightRAG.git
cd LightRAG

# Bootstrap the development environment (recommended)
make dev
source .venv/bin/activate  # Activate the virtual environment (Linux/macOS)
# Or on Windows: .venv\Scripts\activate

# make dev installs the test toolchain plus the full offline stack
# (API, storage backends, and provider integrations), then builds the frontend.
# Run make env-base or copy env.example to .env before starting the server.

# Equivalent manual steps with uv
# Note: uv sync automatically creates a virtual environment in .venv/
uv sync --extra test --extra offline
source .venv/bin/activate  # Activate the virtual environment (Linux/macOS)
# Or on Windows: .venv\Scripts\activate

### Or using pip with virtual environment
# python -m venv .venv
# source .venv/bin/activate  # Windows: .venv\Scripts\activate
# pip install -e ".[test,offline]"

# Build front-end artifacts
cd lightrag_webui
bun install --frozen-lockfile
bun run build
cd ..

# setup env file
make env-base  # Or: cp env.example .env and update it manually
# Launch API-WebUI server
lightrag-server
```
- Launching the LightRAG Server with Docker Compose
```
git clone https://github.com/HKUDS/LightRAG.git
cd LightRAG
cp env.example .env  # Update the .env with your LLM and embedding configurations
# modify LLM and Embedding settings in .env
docker compose up
```

> Historical versions of LightRAG docker images can be found here: [LightRAG Docker Images](https://github.com/HKUDS/LightRAG/pkgs/container/lightrag)
> 
> Official GHCR images published by GitHub Actions are signed with Sigstore Cosign using GitHub OIDC. See [docs/DockerDeployment.md](https://github.com/HKUDS/LightRAG/blob/main/docs/DockerDeployment.md#verify-official-ghcr-images-with-cosign) for verification commands.

### Create.env File With Setup Tool

Instead of editing `env.example` by hand, use the interactive setup wizard to generate a configured `.env` and, when needed, `docker-compose.final.yml`:

```
make env-base           # Required first step: LLM, embedding, reranker
make env-storage        # Optional: storage backends and database services
make env-server         # Optional: server port, auth, and SSL
make env-base-rewrite   # Optional: force-regenerate wizard-managed compose services
make env-storage-rewrite # Optional: force-regenerate wizard-managed compose services
make env-security-check # Optional: audit the current .env for security risks
```

For full description of every target see [docs/InteractiveSetup.md](https://github.com/HKUDS/LightRAG/blob/main/docs/InteractiveSetup.md). The setup wizards update configuration only; run `make env-security-check` separately to audit the current `.env` for security risks before deployment. By default, rerunning the setup preserves unchanged wizard-managed compose service blocks; use a `*-rewrite` target only when you need to rebuild those managed blocks from the bundled templates.

### Install LightRAG Core

- Install from source (Recommended)
```
cd LightRAG
# Note: uv sync automatically creates a virtual environment in .venv/
uv sync
source .venv/bin/activate  # Activate the virtual environment (Linux/macOS)
# Or on Windows: .venv\Scripts\activate

# Or: pip install -e .
```
- Install from PyPI
```
uv pip install lightrag-hku
# Or: pip install lightrag-hku
```

## Quick Start

### LLM and Technology Stack Requirements for LightRAG

LightRAG's demands on the capabilities of Large Language Models (LLMs) are significantly higher than those of traditional RAG, as it requires the LLM to perform entity-relationship extraction tasks from documents. Configuring appropriate Embedding and Reranker models is also crucial for improving query performance.

- **LLM Selection**:
	- It is recommended to use an LLM with at least 32 billion parameters.
		- The context length should be at least 32KB, with 64KB being recommended.
		- It is not recommended to choose reasoning models during the document indexing stage.
		- During the query stage, it is recommended to choose models with stronger capabilities than those used in the indexing stage to achieve better query results.
- **Embedding Model**:
	- A high-performance Embedding model is essential for RAG.
		- We recommend using mainstream multilingual Embedding models, such as: `BAAI/bge-m3` and `text-embedding-3-large`.
		- **Important Note**: The Embedding model must be determined before document indexing, and the same model must be used during the document query phase. For certain storage solutions (e.g., PostgreSQL), the vector dimension must be defined upon initial table creation. Therefore, when changing embedding models, it is necessary to delete the existing vector-related tables and allow LightRAG to recreate them with the new dimensions.
- **Reranker Model Configuration**:
	- Configuring a Reranker model can significantly enhance LightRAG's retrieval performance.
		- When a Reranker model is enabled, it is recommended to set the "mix mode" as the default query mode.
		- We recommend using mainstream Reranker models, such as: `BAAI/bge-reranker-v2-m3` or models provided by services like Jina.

### Quick Start for LightRAG Server

The LightRAG Server is designed to provide Web UI and API support. The LightRAG Server offers a comprehensive knowledge graph visualization feature. It supports various gravity layouts, node queries, subgraph filtering, and more. For more information about LightRAG Server, please refer to [LightRAG Server](https://github.com/HKUDS/LightRAG/blob/main/docs/LightRAG-API-Server.md).

[![[beb3d8dc390103aff75bc51a95b383d8_MD5.png]]](https://github.com/HKUDS/LightRAG/blob/main/README.assets/iShot_2025-03-23_12.40.08.png)

### Quick Start for LightRAG core

To get started with LightRAG core, refer to the sample codes available in the `examples` folder. Additionally, a [video demo](https://www.youtube.com/watch?v=g21royNJ4fw) demonstration is provided to guide you through the local setup process. If you already possess an OpenAI API key, you can run the demo right away:

```
### you should run the demo code with project folder
cd LightRAG
### provide your API-KEY for OpenAI
export OPENAI_API_KEY="sk-...your_opeai_key..."
### download the demo document of "A Christmas Carol" by Charles Dickens
curl https://raw.githubusercontent.com/gusye1234/nano-graphrag/main/tests/mock_data.txt > ./book.txt
### run the demo code
python examples/lightrag_openai_demo.py
```

For a streaming response implementation example, please see `examples/lightrag_openai_compatible_demo.py`. Prior to execution, ensure you modify the sample code's LLM and embedding configurations accordingly.

**Note 1**: When running the demo program, please be aware that different test scripts may use different embedding models. If you switch to a different embedding model, you must clear the data directory (`./dickens`); otherwise, the program may encounter errors. If you wish to retain the LLM cache, you can preserve the `kv_store_llm_response_cache.json` file while clearing the data directory.

**Note 2**: Only `lightrag_openai_demo.py` and `lightrag_openai_compatible_demo.py` are officially supported sample codes. Other sample files are community contributions that haven't undergone full testing and optimization.

## Programming with LightRAG Core

For the complete Core API reference — including init parameters, `QueryParam`, LLM/embedding provider examples (OpenAI, Ollama, Azure, Gemini, HuggingFace, LlamaIndex), reranker injection, insert operations, entity/relation management, and delete/merge — see **[docs/ProgramingWithCore.md](https://github.com/HKUDS/LightRAG/blob/main/docs/ProgramingWithCore.md)**.

> ⚠️
> 
> **If you would like to integrate LightRAG into your project, we recommend utilizing the REST API provided by the LightRAG Server**. LightRAG Core is typically intended for embedded applications or for researchers who wish to conduct studies and evaluations.

### Advanced Features

LightRAG provides additional capabilities including token usage tracking, knowledge graph data export, LLM cache management, Langfuse observability integration, and RAGAS-based evaluation. See **[docs/AdvancedFeatures.md](https://github.com/HKUDS/LightRAG/blob/main/docs/AdvancedFeatures.md)**.

### Multimodal Document Processing (RAG-Anything Integration)

LightRAG integrates with [RAG-Anything](https://github.com/HKUDS/RAG-Anything) for end-to-end multimodal RAG across PDFs, Office documents, images, tables, and formulas. For setup and usage examples, see **[docs/AdvancedFeatures.md](https://github.com/HKUDS/LightRAG/blob/main/docs/AdvancedFeatures.md)**.

> LightRAG Server will soon integrate RAG-Anything’s multimodal processing capabilities into its file processing pipeline. Stay tuned.

## Replicating Findings in the Papper

LightRAG consistently outperforms NaiveRAG, RQ-RAG, HyDE, and GraphRAG across agriculture, computer science, legal, and mixed domains. For the full evaluation methodology, prompts, and reproduce steps, see **[docs/Reproduce.md](https://github.com/HKUDS/LightRAG/blob/main/docs/Reproduce.md)**.

**Overall Performance Table**

|  | **Agriculture** |  | **CS** |  | **Legal** |  | **Mix** |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | NaiveRAG | **LightRAG** | NaiveRAG | **LightRAG** | NaiveRAG | **LightRAG** | NaiveRAG | **LightRAG** |
| **Comprehensiveness** | 32.4% | **67.6%** | 38.4% | **61.6%** | 16.4% | **83.6%** | 38.8% | **61.2%** |
| **Diversity** | 23.6% | **76.4%** | 38.0% | **62.0%** | 13.6% | **86.4%** | 32.4% | **67.6%** |
| **Empowerment** | 32.4% | **67.6%** | 38.8% | **61.2%** | 16.4% | **83.6%** | 42.8% | **57.2%** |
| **Overall** | 32.4% | **67.6%** | 38.8% | **61.2%** | 15.2% | **84.8%** | 40.0% | **60.0%** |
|  | RQ-RAG | **LightRAG** | RQ-RAG | **LightRAG** | RQ-RAG | **LightRAG** | RQ-RAG | **LightRAG** |
| **Comprehensiveness** | 31.6% | **68.4%** | 38.8% | **61.2%** | 15.2% | **84.8%** | 39.2% | **60.8%** |
| **Diversity** | 29.2% | **70.8%** | 39.2% | **60.8%** | 11.6% | **88.4%** | 30.8% | **69.2%** |
| **Empowerment** | 31.6% | **68.4%** | 36.4% | **63.6%** | 15.2% | **84.8%** | 42.4% | **57.6%** |
| **Overall** | 32.4% | **67.6%** | 38.0% | **62.0%** | 14.4% | **85.6%** | 40.0% | **60.0%** |
|  | HyDE | **LightRAG** | HyDE | **LightRAG** | HyDE | **LightRAG** | HyDE | **LightRAG** |
| **Comprehensiveness** | 26.0% | **74.0%** | 41.6% | **58.4%** | 26.8% | **73.2%** | 40.4% | **59.6%** |
| **Diversity** | 24.0% | **76.0%** | 38.8% | **61.2%** | 20.0% | **80.0%** | 32.4% | **67.6%** |
| **Empowerment** | 25.2% | **74.8%** | 40.8% | **59.2%** | 26.0% | **74.0%** | 46.0% | **54.0%** |
| **Overall** | 24.8% | **75.2%** | 41.6% | **58.4%** | 26.4% | **73.6%** | 42.4% | **57.6%** |
|  | GraphRAG | **LightRAG** | GraphRAG | **LightRAG** | GraphRAG | **LightRAG** | GraphRAG | **LightRAG** |
| **Comprehensiveness** | 45.6% | **54.4%** | 48.4% | **51.6%** | 48.4% | **51.6%** | **50.4%** | 49.6% |
| **Diversity** | 22.8% | **77.2%** | 40.8% | **59.2%** | 26.4% | **73.6%** | 36.0% | **64.0%** |
| **Empowerment** | 41.2% | **58.8%** | 45.2% | **54.8%** | 43.6% | **56.4%** | **50.8%** | 49.2% |
| **Overall** | 45.2% | **54.8%** | 48.0% | **52.0%** | 47.2% | **52.8%** | **50.4%** | 49.6% |

*Ecosystem & Extensions*

| [  📸  **RAG-Anything**   <sub>Multimodal RAG</sub>](https://github.com/HKUDS/RAG-Anything) | [  🎥  **VideoRAG**   <sub>Extreme Long-Context Video RAG</sub>](https://github.com/HKUDS/VideoRAG) | [  ✨  **MiniRAG**   <sub>Extremely Simple RAG</sub>](https://github.com/HKUDS/MiniRAG) |
| --- | --- | --- |

---

## ⭐ Star History

[![[f5dd032fdaab4fedb26f4171590ae1d1_MD5.svg]]](https://star-history.com/#HKUDS/LightRAG&Date)

## 🤝 Contribution

We welcome contributions of all kinds — bug fixes, new features, documentation improvements, and more.  
Please read our [**Contributing Guide**](https://github.com/HKUDS/LightRAG/blob/main/.github/CONTRIBUTING.md) before submitting a pull request.

We thank all our contributors for their valuable contributions.

[![[7133f87e76faf7143de6ace54c89146b_MD5.svg]]](https://github.com/HKUDS/LightRAG/graphs/contributors)

## 📖 Citation

```
@article{guo2024lightrag,
title={LightRAG: Simple and Fast Retrieval-Augmented Generation},

year={2024},
eprint={2410.05779},
archivePrefix={arXiv},
primaryClass={cs.IR}
}
```

---

⭐ Thank you for visiting LightRAG! ⭐