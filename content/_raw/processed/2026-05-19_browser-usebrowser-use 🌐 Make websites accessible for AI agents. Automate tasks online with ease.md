---
title: "browser-use/browser-use: 🌐 Make websites accessible for AI agents. Automate tasks online with ease."
source: "https://github.com/browser-use/browser-use"
author:
published:
created: 2026-05-19
description: "🌐 Make websites accessible for AI agents. Automate tasks online with ease. - browser-use/browser-use"
tags:
  - "clippings"
---
![[75742bbad4b64b629940c0c4dbbeea49_MD5.png]]

![[b19bdddb18106edef7afedd7cd54da2d_MD5.svg]]

[![[3f870fe9e88de967e44220a26a2d8f6d_MD5.svg]]](https://cloud.browser-use.com/?utm_source=github&utm_medium=readme-badge-downloads)

---

[![[a3c1edd1bf6693fecbe43fef918e2450_MD5.svg]]](#demos) [![[c89e2a9bc514164358e87212cb6ce1b2_MD5.svg]]](https://docs.browser-use.com/) [![[6cb7c5d25402c2011633c84741319ff9_MD5.svg]]](https://browser-use.com/posts) [![[da892fad532b7dbe3ff1d9693cdc03b2_MD5.svg]]](https://browsermerch.com/) [![[612ae6f89ea0c352e612ca5a13c35010_MD5.svg]]](https://github.com/browser-use/browser-use) [![[d88cf3a16febff0ca80a2c67854f0a04_MD5.svg]]](https://x.com/intent/user?screen_name=browser_use) [![[4f613ae7fda491eff71865b6edec2c0f_MD5.svg]]](https://link.browser-use.com/discord) [![[80b040fa2d439374bdac7320722f4138_MD5.svg]]](https://cloud.browser-use.com/?utm_source=github&utm_medium=readme-badge-cloud)

🌤️ Want to skip the setup? Use our **[cloud](https://cloud.browser-use.com/?utm_source=github&utm_medium=readme-skip-setup)** for faster, scalable, stealth-enabled browser automation!

## 🤖 LLM Quickstart

1. Direct your favorite coding agent (Cursor, Claude Code, etc) to [Agents.md](https://docs.browser-use.com/llms-full.txt)
2. Prompt away!

## 👋 Human Quickstart

**1\. Create environment and install Browser-Use with [uv](https://docs.astral.sh/uv/) (Python>=3.11):**

```
uv init && uv add browser-use && uv sync
# uvx browser-use install  # Run if you don't have Chromium installed
```

**2\. \[Optional\] Get your API key from [Browser Use Cloud](https://cloud.browser-use.com/new-api-key?utm_source=github&utm_medium=readme-quickstart-api-key):**

```
# .env
BROWSER_USE_API_KEY=your-key
# GOOGLE_API_KEY=your-key
# ANTHROPIC_API_KEY=your-key
```

**3\. Run your first agent:**

```
from browser_use import Agent, Browser, ChatBrowserUse
# from browser_use import ChatGoogle  # ChatGoogle(model='gemini-3-flash-preview')
# from browser_use import ChatAnthropic  # ChatAnthropic(model='claude-sonnet-4-6')
import asyncio

async def main():
    browser = Browser(
        # use_cloud=True,  # Use a stealth browser on Browser Use Cloud
    )

    agent = Agent(
        task="Find the number of stars of the browser-use repo",
        llm=ChatBrowserUse(),
        # llm=ChatGoogle(model='gemini-3-flash-preview'),
        # llm=ChatAnthropic(model='claude-sonnet-4-6'),
        browser=browser,
    )
    await agent.run()

if __name__ == "__main__":
    asyncio.run(main())
```

Check out the [library docs](https://docs.browser-use.com/open-source/introduction) and the [cloud docs](https://docs.cloud.browser-use.com/?utm_source=github&utm_medium=readme-cloud-docs) for more!

## Open Source vs Cloud

![[a36f943675e9fdca2ac5eaf371ec547b_MD5.png]]

We benchmark Browser Use across 100 real-world browser tasks. Full benchmark is open source: **[browser-use/benchmark](https://github.com/browser-use/benchmark)**.

**Use the Open-Source Agent**

- You need [custom tools](https://docs.browser-use.com/customize/tools/basics) or deep code-level integration
- We recommend pairing with our [cloud browsers](https://docs.browser-use.com/open-source/customize/browser/remote) for leading stealth, proxy rotation, and scaling
- Or self-host the open-source agent fully on your own machines

**Use the [Fully-Hosted Cloud Agent](https://cloud.browser-use.com/?utm_source=github&utm_medium=readme-hosted-agent) (recommended)**

- Much more powerful agent for complex tasks (see plot above)
- Easiest way to start and scale
- Best stealth with proxy rotation and captcha solving
- 1000+ integrations (Gmail, Slack, Notion, and more)
- Persistent filesystem and memory

## Demos

### 📋 Form-Filling

#### Task = "Fill in this job application with my resume and information."

[![[f1b1ca29743126ca98786a99c2a43505_MD5.gif]]](https://private-user-images.githubusercontent.com/43824272/501209081-57865ee6-6004-49d5-b2c2-6dff39ec2ba9.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxNjkyODEsIm5iZiI6MTc3OTE2ODk4MSwicGF0aCI6Ii80MzgyNDI3Mi81MDEyMDkwODEtNTc4NjVlZTYtNjAwNC00OWQ1LWIyYzItNmRmZjM5ZWMyYmE5LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE5VDA1MzYyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA4Zjk4M2Q4OTk4Y2I2Y2NiNzkwNjExODc1Mjc3ZDE4OTVhNzVkNjIxMjk2NTJjOTdmZWQyMGEwZTkwYzVkODAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmdpZiJ9.Ca_UQZFQ-J44fQQak13qYNB9Uug0242NmxTIhqPFovA)

[Example code ↗](https://github.com/browser-use/browser-use/blob/main/examples/use-cases/apply_to_job.py)

### 🍎 Grocery-Shopping

#### Task = "Put this list of items into my instacart."

grocery-use-large.mp4<video src="https://private-user-images.githubusercontent.com/43824272/502808790-a6813fa7-4a7c-40a6-b4aa-382bf88b1850.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxNjkyODEsIm5iZiI6MTc3OTE2ODk4MSwicGF0aCI6Ii80MzgyNDI3Mi81MDI4MDg3OTAtYTY4MTNmYTctNGE3Yy00MGE2LWI0YWEtMzgyYmY4OGIxODUwLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE5VDA1MzYyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIyYmRlZDZlOWE4ZWI4Yzg0MWM2MmUwZWY2YmNkODI2OTEzYTI2NmU5YTBiMGY1NzMxNTU5MzhkOTcxNTcyZmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNCJ9.bEoE1W2pjTZHhBTPF2BOoKMi7HPUrIjsyM_RbM4aA5E" controls="controls"></video>

[Example code ↗](https://github.com/browser-use/browser-use/blob/main/examples/use-cases/buy_groceries.py)

### 💻 Personal-Assistant.

#### Task = "Help me find parts for a custom PC."

pc-use-large.mp4<video src="https://private-user-images.githubusercontent.com/43824272/502808829-ac34f75c-057a-43ef-ad06-5b2c9d42bf06.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxNjkyODEsIm5iZiI6MTc3OTE2ODk4MSwicGF0aCI6Ii80MzgyNDI3Mi81MDI4MDg4MjktYWMzNGY3NWMtMDU3YS00M2VmLWFkMDYtNWIyYzlkNDJiZjA2Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE5VDA1MzYyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMyOTRmNGIzNTk3ZWExZjE0NjA3YmU3YjZiZWVjMTBmNGZhY2JlYzYwM2Q4MzBkMjc2ZGNkMWViMzBiZTg4NDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNCJ9.xl1qTnM7h_w9YaAjO6bFnrmSw4X4WUYhhos71HFd188" controls="controls"></video>

[Example code ↗](https://github.com/browser-use/browser-use/blob/main/examples/use-cases/pcpartpicker.py)

### 💡See more examples here ↗ and give us a star!

## 🚀 Template Quickstart

**Want to get started even faster?** Generate a ready-to-run template:

```
uvx browser-use init --template default
```

This creates a `browser_use_default.py` file with a working example. Available templates:

- `default` - Minimal setup to get started quickly
- `advanced` - All configuration options with detailed comments
- `tools` - Examples of custom tools and extending the agent

You can also specify a custom output path:

```
uvx browser-use init --template default --output my_agent.py
```

## 💻 CLI

Fast, persistent browser automation from the command line:

```
browser-use open https://example.com    # Navigate to URL
browser-use state                       # See clickable elements
browser-use click 5                     # Click element by index
browser-use type "Hello"                # Type text
browser-use screenshot page.png         # Take screenshot
browser-use close                       # Close browser
```

The CLI keeps the browser running between commands for fast iteration. See [CLI docs](https://github.com/browser-use/browser-use/blob/main/browser_use/skill_cli/README.md) for all commands.

### Claude Code Skill

For [Claude Code](https://claude.ai/code), install the skill to enable AI-assisted browser automation:

```
mkdir -p ~/.claude/skills/browser-use
curl -o ~/.claude/skills/browser-use/SKILL.md \
  https://raw.githubusercontent.com/browser-use/browser-use/main/skills/browser-use/SKILL.md
```

## Integrations, hosting, custom tools, MCP, and more on our Docs ↗

## FAQ

**What's the best model to use?**

We optimized **ChatBrowserUse()** specifically for browser automation tasks. On avg it completes tasks 3-5x faster than other models with SOTA accuracy.

**Pricing (per 1M tokens):**

- Input tokens: $0.20
- Cached input tokens: $0.02
- Output tokens: $2.00

For other LLM providers, see our [supported models documentation](https://docs.browser-use.com/supported-models).

**Should I use the Browser Use system prompt with the open-source preview model?**

Yes. If you use `ChatBrowserUse(model='browser-use/bu-30b-a3b-preview')` with a normal `Agent(...)`, Browser Use still sends its default agent system prompt for you.

You do **not** need to add a separate custom "Browser Use system message" just because you switched to the open-source preview model. Only use `extend_system_message` or `override_system_message` when you intentionally want to customize the default behavior for your task.

If you want the best default speed/accuracy, we still recommend the newer hosted `bu-*` models. If you want the open-source preview model, the setup stays the same apart from the `model=` value.

**Can I use custom tools with the agent?**

Yes! You can add custom tools to extend the agent's capabilities:

```
from browser_use import Tools

tools = Tools()

@tools.action(description='Description of what this tool does.')
def custom_tool(param: str) -> str:
    return f"Result: {param}"

agent = Agent(
    task="Your task",
    llm=llm,
    browser=browser,
    tools=tools,
)
```
**Can I use this for free?**

Yes! Browser-Use is open source and free to use. You only need to choose an LLM provider (like OpenAI, Google, ChatBrowserUse, or run local models with Ollama).

**Terms of Service**

This open-source library is licensed under the MIT License. For Browser Use services & data policy, see our [Terms of Service](https://browser-use.com/legal/terms-of-service) and [Privacy Policy](https://browser-use.com/privacy/).

**How do I handle authentication?**

Check out our authentication examples:

- [Using real browser profiles](https://github.com/browser-use/browser-use/blob/main/examples/browser/real_browser.py) - Reuse your existing Chrome profile with saved logins
- If you want to use temporary accounts with inbox, choose AgentMail
- To sync your auth profile with the remote browser, run `curl -fsSL https://browser-use.com/profile.sh | BROWSER_USE_API_KEY=XXXX sh` (replace XXXX with your API key)

These examples show how to maintain sessions and handle authentication seamlessly.

**How do I solve CAPTCHAs?**

For CAPTCHA handling, you need better browser fingerprinting and proxies. Use [Browser Use Cloud](https://cloud.browser-use.com/?utm_source=github&utm_medium=readme-faq-captcha) which provides stealth browsers designed to avoid detection and CAPTCHA challenges.

**How do I go into production?**

Chrome can consume a lot of memory, and running many agents in parallel can be tricky to manage.

For production use cases, use our [Browser Use Cloud API](https://cloud.browser-use.com/?utm_source=github&utm_medium=readme-faq-production) which handles:

- Scalable browser infrastructure
- Memory management
- Proxy rotation
- Stealth browser fingerprinting
- High-performance parallel execution

**Tell your computer what to do, and it gets it done.**

[![[b1e20b5774679cf27a5ce5808e65078e_MD5.jpg]]](https://private-user-images.githubusercontent.com/67061560/425692580-06fa3078-8461-4560-b434-445510c1766f.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxNjkyODEsIm5iZiI6MTc3OTE2ODk4MSwicGF0aCI6Ii82NzA2MTU2MC80MjU2OTI1ODAtMDZmYTMwNzgtODQ2MS00NTYwLWI0MzQtNDQ1NTEwYzE3NjZmLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUxOVQwNTM2MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNjQ5YWY3Njg1NzJkMjRlMGVjNDNhZmNiMjQ0MmM5MzAyODdlZDEzYzg4NDdmMGJkYjZhNDMzZjE3NDMzNGQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.ZZlJI0UdpZaA1igUea-6kK4XTEN9bWtDipYGi7fcq5I)

Made with ❤️ in Zurich and San Francisco