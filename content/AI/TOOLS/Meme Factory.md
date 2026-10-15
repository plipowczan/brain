---
title: "Meme Factory"
date: 2026-10-15
enableToc: true
openToc: true
tags: ["tool", "ai", "memes", "claude-code", "agent-skills", "open-source"]
type: tool
source: "_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md"
agent-created: true
summary: "meme-factory skill in softaworks/agent-toolkit — a Claude Code skill on memegen.link with a template-selection guide; popular (4K installs) but 8 of 21 template IDs are dead and it hides the watermark"
---
# Meme Factory

🗒️ **`meme-factory`** is a Claude Code skill in [softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit/tree/main/skills/meme-factory) that makes memes through [[Memegen]]. It brings a template-selection guide and extra text formats (ASCII art, greentext). skills.sh shows about 4.0K installs (first seen 2026-01-20) and passing audits from three providers; a byte-identical copy ships in `davila7/claude-code-templates`. The folder has a single commit from January 2026 and no fixes since. [3rd-party registry data]

## Links
### Description
Read in full by the research agent. Findings, all tested against the live memegen API:
- **8 of the 21 template IDs it teaches return 404:** `changemind`, `distracted` (both in its "Popular Templates" table), `ancient`, `skeptical`, `surprised`, `thinking`, `boardroom`, `suspicious`. Correct IDs include `cmm` and `db`.
- **The bundled Python CLI prints nothing:** every branch of `main()` ends in `pass`, so `generate` and `suggest` exit 0 with no output. The `suggest` helper uses literal substring keys, so "failed" does not match "failure".
- **SKILL.md calls memegen keyless, free and not rate-limited**, and does not mention the watermark or the training-data terms.
- **Polish works** through its URL builder ("ZAŻÓŁĆ GĘŚLĄ JAŹŃ" rendered correctly).
- App Control risk is LOW (markdown plus optional stdlib Python).

### Download or use
`npx skills add https://github.com/softaworks/agent-toolkit --skill meme-factory` (add `--agent claude-code` for a global install). One directory warns that the skills CLI may install into `.agents/skills/`, which Claude Code might not auto-load, so check the folder lands in `~/.claude/skills/meme-factory/`. Manual alternative: copy the folder.

## Reasoning for
Good enough for a few English throwaway memes a month **after** you fix the dead template IDs and delete the broken CLI. As the foundation of a Polish-capable skill it is weaker than [[OpenClaw Meme Maker]], and the hosted-only design inherits all of [[Memegen]]'s caveats. I would fork it, keep its joke-shape idea, and replace the template table with one that is validated against `GET /templates/`.

## Alternatives considered
- **makememe** (`dhruvmehra/makememe`): pip CLI plus skill over memegen; all 25 template IDs in its "joke shape" map are valid, but it has no API-key support, defaults to public URLs and its `--install-skill` overwrites an existing `meme` skill. Useful as a reference for the template map, 15 downloads a month.
- **memelink-cli:** a Go binary; auto mode drops Polish captions and the unsigned `.exe` is HIGH risk under Smart App Control.
- **Own skill on [[Satori]]:** the plan in [[Meme Generation for Coding Agents]].

## Resources
- 🔗 [softaworks/agent-toolkit — meme-factory](https://github.com/softaworks/agent-toolkit/tree/main/skills/meme-factory) · [skills.sh listing](https://skills.sh/softaworks/agent-toolkit/meme-factory)
- 📖 Related: [[Meme Generation for Coding Agents]] · [[Memegen]] · [[OpenClaw Meme Maker]] · [[Agent Skills]] · [[Claude Code]]

---
Template: [[templates/tool]]
