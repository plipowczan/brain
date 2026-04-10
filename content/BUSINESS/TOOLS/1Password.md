---
title: "1Password"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "security", "passwords"]
type: tool
agent-created: true
summary: "Password manager and secrets vault — replaces Dashlane"
---
# 1Password

Password manager and secrets management tool.

## Links
### Description
Stores and auto-fills passwords, credit cards, secure notes. Also provides developer tools for managing secrets (SSH keys, API tokens, environment variables).
### Download or use
[1password.com](https://1password.com)

## Reasoning for
Replaced Dashlane. Key advantages:
- **Developer tools** — CLI, SSH agent, secrets automation
- **Family sharing** — shared vaults for family members
- **1Password CLI** — integrate secrets into scripts and CI/CD
- **Watchtower** — breach monitoring and weak password alerts
- Cross-platform (Windows, Mac, iOS, Android, browser extensions)

Used alongside [[Authenticator]] for 2FA.

## Alternatives considered
- Dashlane — used previously, switched for better developer tools
- Bitwarden — open-source, good but less polished UX

## Resources
[1Password Documentation](https://developer.1password.com/docs)

---
Template: [[templates/tool]]
