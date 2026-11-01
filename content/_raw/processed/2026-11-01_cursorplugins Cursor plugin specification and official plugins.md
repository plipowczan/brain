---
title: "cursor/plugins: Cursor plugin specification and official plugins"
source: "https://github.com/cursor/plugins"
author:
published:
created: 2026-10-14
description:
tags:
  - "clippings"
---
## Cursor plugins

Official Cursor plugins for popular developer tools, frameworks, and SaaS products. Each plugin is a standalone directory at the repository root with its own `.cursor-plugin/plugin.json` manifest.

## Plugins

| `name` | Plugin | Author | Category | `description` (from marketplace) |
| --- | --- | --- | --- | --- |
| `teaching` | [Teaching](https://github.com/cursor/plugins/blob/main/teaching) | Cursor | Utilities | Skill mapping, practice plans, and learning retrospectives. |
| `continual-learning` | [Continual Learning](https://github.com/cursor/plugins/blob/main/continual-learning) | Eric Zakariasson | Developer Tools | Incremental transcript-driven memory updates for AGENTS.md using high-signal bullet points only. |
| `cursor-team-kit` | [Cursor Team Kit](https://github.com/cursor/plugins/blob/main/cursor-team-kit) | Eric Zakariasson | Developer Tools | Internal team workflows for CI, code review, shipping, local automation, and verification. |
| `thermos` | [Thermos](https://github.com/cursor/plugins/blob/main/thermos) | Cursor | Developer Tools | Thermo-nuclear branch review: deep security/correctness audits, harsh code-quality rubrics, parallel subagents, thermos orchestration, and optional merge-ready PR flows. |
| `create-plugin` | [Create Plugin](https://github.com/cursor/plugins/blob/main/create-plugin) | Cursor | Developer Tools | Scaffold and validate new agent plugins. |
| `ralph-loop` | [Ralph Loop](https://github.com/cursor/plugins/blob/main/ralph-loop) | Cursor | Developer Tools | Iterative self-referential AI loops using the Ralph Wiggum technique. |
| `agent-compatibility` | [Agent Compatibility](https://github.com/cursor/plugins/blob/main/agent-compatibility) | Cursor | Developer Tools | CLI-backed repo compatibility scans plus agents that audit startup, validation, and docs against reality. |
| `cli-for-agent` | [CLI for Agents](https://github.com/cursor/plugins/blob/main/cli-for-agent) | Eric Zakariasson | Developer Tools | Patterns for designing CLIs that coding agents can run reliably: flags, help with examples, pipelines, errors, idempotency, dry-run. |
| `pr-review-canvas` | [PR Review Canvas](https://github.com/cursor/plugins/blob/main/pr-review-canvas) | Cursor | Developer Tools | Render PR diffs as review canvases grouped by importance. |
| `docs-canvas` | [Docs Canvas](https://github.com/cursor/plugins/blob/main/docs-canvas) | Cursor | Developer Tools | Render documentation as a navigable canvas. |
| `cursor-sdk` | [Cursor SDK](https://github.com/cursor/plugins/blob/main/cursor-sdk) | Cursor | Developer Tools | Build apps, scripts, and automations with the TypeScript SDK. |
| `origin-apps` | [Origin Apps](https://github.com/cursor/plugins/blob/main/origin-apps) | Cursor | Developer Tools | Skills for building on the Cursor Origin API. Fetch the live spec first, then follow the Origin rules for credentials, scopes, webhooks, paging, and errors. Includes a skill that plans the port of an existing GitHub App. |
| `orchestrate` | [Orchestrate](https://github.com/cursor/plugins/blob/main/orchestrate) | Cursor | Developer Tools | Fan large tasks out across parallel cloud agents with planners, workers, verifiers, and structured handoffs. |
| `pstack` | [pstack](https://github.com/cursor/plugins/blob/main/pstack) | Lauren Tan | Developer Tools | if you want to go fast, go deep first. pstack helps you write less, but higher quality code. rigorous agent workflows you can parallelize with confidence. |
| `dyl-stack` | [dyl-stack](https://github.com/cursor/plugins/blob/main/dyl-stack) | Dylan Gattey | Developer Tools | Dylan's agent style on top of pstack: root causes over symptom patches, The Algorithm before design, terse verified delivery, a PR review that fits in a paste, and Figma-to-UI with a visual judge. |
| `advisor` | [Advisor](https://github.com/cursor/plugins/blob/main/advisor) | Cursor | Developer Tools | Consult a stronger model before major decisions, when stuck, and before declaring done. |
| `grok-voice` | [Grok Voice](https://github.com/cursor/plugins/blob/main/grok-voice) | Eric Zakariasson | Developer Tools | Add Grok voice to an app: realtime speech-to-speech, speech-to-text dictation, text-to-speech read-aloud, and a log-driven fix loop for voice sessions. |
| `gmail` | [Gmail](https://github.com/cursor/plugins/blob/main/third_party/gmail) | Cursor | Productivity | Search, read, draft, and manage email. |
| `google-drive` | [Google Drive](https://github.com/cursor/plugins/blob/main/third_party/google-drive) | Cursor | Productivity | Search, read, create, and share files. |
| `google-calendar` | [Google Calendar](https://github.com/cursor/plugins/blob/main/third_party/google-calendar) | Cursor | Productivity | Search events and schedule meetings. |
| `google-docs` | [Google Docs](https://github.com/cursor/plugins/blob/main/third_party/google-docs) | Cursor | Productivity | Read, create, and edit documents. |
| `google-sheets` | [Google Sheets](https://github.com/cursor/plugins/blob/main/third_party/google-sheets) | Cursor | Productivity | Read, write, and append spreadsheet data. |
| `google-slides` | [Google Slides](https://github.com/cursor/plugins/blob/main/third_party/google-slides) | Cursor | Productivity | Create, edit, and render presentations. |
| `gong` | [Gong](https://github.com/cursor/plugins/blob/main/third_party/gong) | Cursor | Integrations | Pull account summaries, deal insights, and call briefs. |
| `salesforce` | [Salesforce](https://github.com/cursor/plugins/blob/main/third_party/salesforce) | Cursor | Integrations | Query, create, and update records in your org. |
| `salesforce-headless-360` | [Salesforce (Headless 360, Beta)](https://github.com/cursor/plugins/blob/main/third_party/salesforce-headless-360) | Cursor | Integrations | Manage records, users, and org setup across Salesforce. |
| `playwright` | [Playwright](https://github.com/cursor/plugins/blob/main/third_party/playwright) | Cursor | Integrations | Navigate, click, screenshot, and test in a real browser. |
| `github` | [GitHub](https://github.com/cursor/plugins/blob/main/third_party/github) | Cursor | Integrations | Manage repos, issues, pull requests, and Actions. |
| `ashby` | [Ashby](https://github.com/cursor/plugins/blob/main/third_party/ashby) | Cursor | Integrations | Search candidates, prep interviews, and manage pipeline tasks. |
| `hubspot` | [HubSpot](https://github.com/cursor/plugins/blob/main/third_party/hubspot) | Cursor | Integrations | Search and update contacts, companies, deals, and tickets. |
| `intercom` | [Intercom](https://github.com/cursor/plugins/blob/main/third_party/intercom) | Cursor | Integrations | Search conversations, contacts, and Help Center articles. |
| `zoom` | [Zoom](https://github.com/cursor/plugins/blob/main/third_party/zoom) | Cursor | Integrations | Search meetings, pull transcripts, and work with Zoom Docs. |
| `x` | [X](https://github.com/cursor/plugins/blob/main/third_party/x) | Cursor | Integrations | Search posts, read timelines, pull trends, and manage bookmarks. |
| `clay` | [Clay](https://github.com/cursor/plugins/blob/main/third_party/clay) | Cursor | Integrations | Enrich people and companies, run AI research agents. |
| `circleback` | [Circleback](https://github.com/cursor/plugins/blob/main/third_party/circleback) | Cursor | Integrations | Search meetings, transcripts, action items, and emails. |
| `docusign` | [Docusign](https://github.com/cursor/plugins/blob/main/third_party/docusign) | Cursor | Integrations | Manage envelopes, templates, workflows, and agreements. |
| `navan` | [Navan](https://github.com/cursor/plugins/blob/main/third_party/navan) | Cursor | Integrations | Query expenses, travel bookings, policies, and cards. |
| `profound` | [Profound](https://github.com/cursor/plugins/blob/main/third_party/profound) | Cursor | Integrations | Track AI visibility, sentiment, and citations. |
| `juicebox` | [Juicebox](https://github.com/cursor/plugins/blob/main/third_party/juicebox) | Cursor | Integrations | Query recruiting analytics, shortlists, and sourcing agents. |
| `outreach` | [Outreach](https://github.com/cursor/plugins/blob/main/third_party/outreach) | Cursor | Integrations | Search sequences, prospects, and Kaia meetings. |
| `amplemarket` | [Amplemarket](https://github.com/cursor/plugins/blob/main/third_party/amplemarket) | Cursor | Integrations | Search people and companies, enrich leads, run sequences. |
| `klaviyo` | [Klaviyo](https://github.com/cursor/plugins/blob/main/third_party/klaviyo) | Cursor | Integrations | Manage profiles, segments, campaigns, and flows. |
| `customer-io` | [Customer.io](https://github.com/cursor/plugins/blob/main/third_party/customer-io) | Cursor | Integrations | Build campaigns, manage segments, and query people. |
| `mailerlite` | [MailerLite](https://github.com/cursor/plugins/blob/main/third_party/mailerlite) | Cursor | Integrations | Manage subscribers, groups, campaigns, and automations. |
| `brevo` | [Brevo](https://github.com/cursor/plugins/blob/main/third_party/brevo) | Cursor | Integrations | Manage contacts, email and SMS campaigns, and CRM deals. |
| `typeform` | [Typeform](https://github.com/cursor/plugins/blob/main/third_party/typeform) | Cursor | Integrations | Build forms, analyze responses, and manage contacts. |
| `jotform` | [Jotform](https://github.com/cursor/plugins/blob/main/third_party/jotform) | Cursor | Integrations | Create and edit forms, then read submissions. |
| `semrush` | [Semrush](https://github.com/cursor/plugins/blob/main/third_party/semrush) | Cursor | Integrations | Research keywords, backlinks, traffic, and competitors. |
| `ahrefs` | [Ahrefs](https://github.com/cursor/plugins/blob/main/third_party/ahrefs) | Cursor | Integrations | Research keywords, backlinks, rankings, and site health. |
| `godaddy` | [GoDaddy](https://github.com/cursor/plugins/blob/main/third_party/godaddy) | Cursor | Integrations | Brainstorm domain names and check availability. |
| `upwork` | [Upwork](https://github.com/cursor/plugins/blob/main/third_party/upwork) | Cursor | Integrations | Search talent, post jobs, and manage contracts. |
| `workable` | [Workable](https://github.com/cursor/plugins/blob/main/third_party/workable) | Cursor | Integrations | Search candidates, move pipelines, and manage HR records. |
| `brex` | [Brex](https://github.com/cursor/plugins/blob/main/third_party/brex) | Cursor | Integrations | Query expenses, receipts, bills, cards, and travel. |
| `todoist` | [Todoist](https://github.com/cursor/plugins/blob/main/third_party/todoist) | Cursor | Integrations | Create, find, and complete tasks and projects. |
| `calendly` | [Calendly](https://github.com/cursor/plugins/blob/main/third_party/calendly) | Cursor | Integrations | Check availability and book, cancel, or reschedule. |
| `smartsheet` | [Smartsheet](https://github.com/cursor/plugins/blob/main/third_party/smartsheet) | Cursor | Integrations | Query and update sheets, rows, and workspaces. |
| `wrike` | [Wrike](https://github.com/cursor/plugins/blob/main/third_party/wrike) | Cursor | Integrations | Search projects, create tasks, and post comments. |
| `coda` | [Coda](https://github.com/cursor/plugins/blob/main/third_party/coda) | Cursor | Integrations | Search docs, read pages, and update tables. |
| `guru` | [Guru](https://github.com/cursor/plugins/blob/main/third_party/guru) | Cursor | Integrations | Search company knowledge and draft verified answers. |
| `fireflies` | [Fireflies](https://github.com/cursor/plugins/blob/main/third_party/fireflies) | Cursor | Integrations | Search meeting transcripts, summaries, and action items. |
| `otter` | [Otter.ai](https://github.com/cursor/plugins/blob/main/third_party/otter) | Cursor | Integrations | Search meeting history and pull full transcripts. |
| `fathom` | [Fathom](https://github.com/cursor/plugins/blob/main/third_party/fathom) | Cursor | Integrations | Search meetings and pull transcripts and summaries. |
| `craft` | [Craft](https://github.com/cursor/plugins/blob/main/third_party/craft) | Cursor | Integrations | Search, create, and update documents and daily notes. |
| `mem` | [Mem](https://github.com/cursor/plugins/blob/main/third_party/mem) | Cursor | Integrations | Capture, search, and organize notes and collections. |
| `readwise` | [Readwise](https://github.com/cursor/plugins/blob/main/third_party/readwise) | Cursor | Integrations | Search highlights and Reader documents, save articles. |
| `similarweb` | [Similarweb](https://github.com/cursor/plugins/blob/main/third_party/similarweb) | Cursor | Integrations | Analyze website traffic, audiences, and competitors. |
| `xero` | [Xero](https://github.com/cursor/plugins/blob/main/third_party/xero) | Cursor | Integrations | Read and write invoices, contacts, reports, and payroll. |
| `x-ads` | [X Ads](https://github.com/cursor/plugins/blob/main/third_party/x-ads) | Cursor | Integrations | Manage ad campaigns, create ads, track conversions, and pull performance stats. |
| `attio` | [Attio](https://github.com/cursor/plugins/blob/main/third_party/attio) | Cursor | Integrations | Search and update CRM records, lists, notes, and tasks. |
| `hunter` | [Hunter](https://github.com/cursor/plugins/blob/main/third_party/hunter) | Cursor | Integrations | Find and verify emails, discover companies, and save leads. |
| `gamma` | [Gamma](https://github.com/cursor/plugins/blob/main/third_party/gamma) | Cursor | Integrations | Generate presentations, documents, and webpages. |
| `teams` | [Teams](https://github.com/cursor/plugins/blob/main/third_party/teams) | Cursor | Productivity | Search, read, and send Microsoft Teams chats and channel messages. |
| `sharepoint` | [SharePoint](https://github.com/cursor/plugins/blob/main/third_party/sharepoint) | Cursor | Productivity | Search and read Microsoft SharePoint sites, document libraries, files, and lists. |
| `finance` | [Finance](https://github.com/cursor/plugins/blob/main/third_party/finance) | Cursor | Integrations | Securely connect your accounts so Grok can help with questions about your spending, subscriptions, balances, and investments. |
| `webull` | [Webull](https://github.com/cursor/plugins/blob/main/third_party/webull) | Cursor | Integrations | View accounts, positions, orders, watchlists, and market data. |
| `sp-global` | [S&P Global](https://github.com/cursor/plugins/blob/main/third_party/sp-global) | Cursor | Integrations | Query S&P Capital IQ financials, prices, and transcripts. |
| `interactive-brokers` | [Interactive Brokers](https://github.com/cursor/plugins/blob/main/third_party/interactive-brokers) | Cursor | Integrations | Review positions, balances, P&L, and draft trade instructions. |
| `meltwater` | [Meltwater](https://github.com/cursor/plugins/blob/main/third_party/meltwater) | Cursor | Integrations | Search media and social mentions and pull analytics. |
| `daloopa` | [Daloopa](https://github.com/cursor/plugins/blob/main/third_party/daloopa) | Cursor | Integrations | Pull source-linked fundamentals, KPIs, filings, and prices. |
| `excalidraw` | [Excalidraw](https://github.com/cursor/plugins/blob/main/third_party/excalidraw) | Cursor | Integrations | Draw and export hand-drawn diagrams from chat. |
| `google-cloud-bigquery` | [Google Cloud BigQuery](https://github.com/cursor/plugins/blob/main/third_party/google-cloud-bigquery) | Cursor | Integrations | Explore datasets and tables and run SQL queries. |
| `statsig` | [Statsig](https://github.com/cursor/plugins/blob/main/third_party/statsig) | Cursor | Integrations | Inspect and manage feature gates, experiments, dynamic configs, and metrics. |
| `robinhood` | [Robinhood](https://github.com/cursor/plugins/blob/main/third_party/robinhood) | Cursor | Integrations | View portfolios, positions, orders, watchlists, and market data, and trade in a Robinhood Agentic account. |
| `coinbase` | [Coinbase](https://github.com/cursor/plugins/blob/main/third_party/coinbase) | Cursor | Integrations | Check balances, get quotes, and preview or place trades. |
| `etoro-trading` | [eToro Trading](https://github.com/cursor/plugins/blob/main/third_party/etoro-trading) | Cursor | Integrations | View your eToro portfolio, balances, positions, and watchlists, research instruments and traders, and prepare and place trades. |
| `x-money` | [X Money](https://github.com/cursor/plugins/blob/main/third_party/x-money) | Cursor | Integrations | Use your X Money Card, send money to users on X, manage your finances, view your balance and browse through your transaction history. |
| `shopify-store` | [Shopify](https://github.com/cursor/plugins/blob/main/third_party/shopify-store) | Cursor | Integrations | Connect your Shopify store so Grok can answer questions about products, orders, customers, inventory, and sales. |
| `quickbooks-online` | [QuickBooks Online](https://github.com/cursor/plugins/blob/main/third_party/quickbooks-online) | Cursor | Integrations | Read invoices, bills, expenses, customers, accounts, and financial reports. |
| `workday` | [Workday](https://github.com/cursor/plugins/blob/main/third_party/workday) | Cursor | Integrations | Look up workers, organizations, time off, payroll, and recruiting data in Workday. |
| `square` | [Square](https://github.com/cursor/plugins/blob/main/third_party/square) | Cursor | Integrations | Work with payments, orders, catalog, customers, and invoices. |
| `tailscale` | [Tailscale](https://github.com/cursor/plugins/blob/main/third_party/tailscale) | Cursor | Integrations | Let Grok Bot reach MCP servers on your private Tailscale network. Sign in to Tailscale to connect your tailnet; Grok Bot joins it as one tagged device and only reaches the hosts you grant to tag:grokbot. |
| `highlevel` | [HighLevel](https://github.com/cursor/plugins/blob/main/third_party/highlevel) | Cursor | Integrations | Work with contacts, conversations, opportunities, calendars, and payments. |
| Author values match each plugin’s `plugin.json` `author.name` (Cursor lists `plugins@cursor.com` in the manifest). |  |  |  |  |

## Repository structure

This is a multi-plugin marketplace repository. The root `.cursor-plugin/marketplace.json` lists all plugins, and each plugin has its own manifest:

```
plugins/
├── .cursor-plugin/
│   └── marketplace.json       # Marketplace manifest (lists all plugins)
├── plugin-name/
│   ├── .cursor-plugin/
│   │   └── plugin.json        # Per-plugin manifest
│   ├── skills/                # Agent skills (SKILL.md with frontmatter)
│   ├── rules/                 # Cursor rules (.mdc files)
│   ├── mcp.json               # MCP server definitions
│   ├── README.md
│   ├── CHANGELOG.md
│   └── LICENSE
└── ...
```