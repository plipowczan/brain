---
title: "1Password"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "security", "passwords"]
type: tool
agent-created: true
summary: "Password manager and secrets vault — replaces Dashlane"
homepage: "https://1password.com/"
status-checked: 2026-11-13
project-status: active
---
# 1Password

> [!success] Status check 2026-11-13 — active
> **Verdict:** 1Password shipped CLI 2.42.0 on 2026-11-04 and a JavaScript SDK beta on 2026-11-11, and posted its October 2026 product roundup on 2026-11-02.
> **Latest release:** 1Password CLI 2.42.0 on 2026-11-04 (stable). · **last dated update:** 2026-11-11 · **licence:** proprietary SaaS; paid subscription per user or per family (personal plans, plus Teams/Business/Enterprise per seat)…
> **Source:** https://releases.1password.com/
> **Changed since this note:** No claim in the note is wrong, but the product now covers much more than the note describes, with a strong push into AI-agent and machine identity. On 2026-06-15 1Password acquired Apono (just-in-time access governance) and launched Credential Broker in private beta (starting with GitHub Actions workload identity)…

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
