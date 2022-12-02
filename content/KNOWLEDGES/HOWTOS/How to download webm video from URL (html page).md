---
title: "How to download webm video from url (clickup)"
date:  2022-12-02
enableToc: true
openToc: true
tags: ["knowledge", "howto"]
type: knowledge-note
---

# How to download webm video from URL (html page)

## 🗒️Task:
I have an URL and I would like to download the video webm file. I record videos using clickup and once it is generated I would like to download those recording and do some postprocessing on it and this is why I need the file.

## 🛠️Prerequisites (if applicable): 
Web browser - I'm using Microsoft Edge

## 📝Instructions:
1. Open url with the file in browser and hit F12 to open developer tools
   ![[ATTACHMENTS/Pasted image 20221202174738.png]]
2. Use the **Select an element in the page to inspect it** option and try to point the whole video control - it might be hard so you can use the code to find the proper video component.
   ![[ATTACHMENTS/Pasted image 20221202174909.png]]
3. Copy the video source URL
   ![[ATTACHMENTS/Pasted image 20221202175300.png]]
![[ATTACHMENTS/Pasted image 20221202175317.png]]
4. Right click and select Go to option...
   ![[ATTACHMENTS/Pasted image 20221202175425.png]]
5. It will start to download:
   ![[ATTACHMENTS/Pasted image 20221202175507.png]]

## Video:
![[ATTACHMENTS/screen-recording-2022-12-02-17_59.webm]]

## Outcome:
You will have the webm file downloaded.

This solution should also work with other video types - not only webm.

---
Template: [[templates/knowledge_note_how_to]]