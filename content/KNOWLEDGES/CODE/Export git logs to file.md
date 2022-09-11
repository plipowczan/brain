---
title: "Export git logs to file"
date:  2022-09-11
enableToc: true
openToc: true
tags: ["knowledge", "git", "reports"]
type: knowledge-note
---

```cmd
git log --after="<date from>" --before="<date to>" --pretty=format:'%h %ad %s' --date=short > "<path>"
```