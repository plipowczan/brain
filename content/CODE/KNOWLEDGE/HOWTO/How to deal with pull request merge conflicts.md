---
title: "How to deal with pull request merge conflicts"
date:  2022-10-27
enableToc: true
openToc: true
tags: ["knowledge", "howto", "git", "merge", "conflict"]
type: knowledge-note
summary: "Step-by-step guide to resolving git pull request merge conflicts using Visual Studio."
---

# How to deal with pull request merge conflicts

## 🗒️Task:
Resolve merge conflict in git
![[ATTACHMENTS/Pasted image 20221027221450.png]]

## 🛠️Prerequisites (if applicable): 
Tools used to solve this task. [[CODE/TOOLS/Visual Studio]]

## 📝Instructions:
-   Checkout the branch with merge conflict - click on the branch from remote that you would like to checkout
![[ATTACHMENTS/Pasted image 20221027221914.png]]
-   Open project git repository 
![[ATTACHMENTS/Pasted image 20221027222236.png]]
- Right click on the remote branch which there is a conflict with - the target of the pull request
![[ATTACHMENTS/Pasted image 20221027222414.png]]
-   Click on the resolve the conflict
![[ATTACHMENTS/Pasted image 20221027222642.png]]
- Right click on the file marked with C
![[ATTACHMENTS/Pasted image 20221027222756.png]]
- Decide what to do with the file
![[ATTACHMENTS/Pasted image 20221027222843.png]]
Please note that this conflict was about that in one branch the file was edited and in second it was deleted. The source branch is correct - the file should be deleted so we will delete the file.
- Commit staged and push
![[ATTACHMENTS/Pasted image 20221027223106.png]]

## Outcome:
The conflicts will be resolved:
![[ATTACHMENTS/Pasted image 20221027223207.png]]

## 📖Further reading
[Resolve Git merge conflicts - Azure Repos | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/repos/git/merging?view=azure-devops&tabs=visual-studio-2022)

---
Template: [[templates/knowledge_note_how_to]]