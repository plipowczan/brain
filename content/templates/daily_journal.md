---
title: "<% tp.date.now("YYYYMMDD") %>"
date: <% tp.date.now("YYYY-MM-DD") %>
enableToc: true
openToc: true
tags: ["journal"]
type: dailyjournal
---

<%-* 
let new_path = tp.file.folder(true) + "/" + tp.date.now("YYYYMM") + "/" + tp.date.now("YYYYMMDD");
await tp.file.move(new_path);
-%>
[[<% tp.date.now("YYYYMMDD") %>]]

# Morning
## I am grateful for:
1. 

## What would make today great? (top 3 priorities)
- [ ]   

---
# Evening
## Highlights of the day
1.  

## What did I learn today?
1.  

## How can I improve?
1.  