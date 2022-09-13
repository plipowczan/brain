---
title: "Export git logs to file"
date:  2022-09-13
enableToc: true
openToc: true
tags: ["knowledge", "git", "reports", "howto"]
type: knowledge-note
---
#todo 
# Export git logs to file

## 🗒️Task:
A description of the task that your readers are looking to accomplish.

## 🛠️Prerequisites (if applicable): 
If you have different pricing tiers, this should include information about which products or pricing plans this how-to applies to.

## 📝Instructions:

-   Enter into command line
```cmd
git log --after="<date from>" --before="<date to>" --pretty=format:'%h %ad %s' --date=short > "<path>"
```

## Outcome:
What users can expect to happen after completing the steps in the how-to knowledge base article.

## 📖Further reading
Links to related knowledge base articles or how-tos.

---
Template: [[templates/knowledge_note_how_to]]
