---
title: "Common workflow I use in dotnet projects using Azure DevOps"
date:  2022-10-27
enableToc: true
openToc: true
tags: ["knowledge", "howto", "workflow", "azuredevops"]
type: knowledge-note
---

# Common workflow in Azure DevOps I use in dotnet projects

## 🗒️Task:
There are dozens ways you can approach to work on the tasks. This is one way which I use and it was proven in dozens of project.

## ?? Why:
To be able to track the progress of the task.

## 🛠️Prerequisites (if applicable): 
Get familiar with [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/pl-pl/products/devops/)  the environment I choose most often when working on the dotnet projects.
[What is Azure DevOps? - Azure DevOps | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?view=azure-devops)
Set up a project using the Agile process - you can adjust the process however I use the defaults: [Agile process work item types & workflow in Azure Boards - Azure Boards | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/boards/work-items/guidance/agile-process-workflow?view=azure-devops).
Tools used in this tutorial:
[[TOOLS/VisualStudio]]

## 📝Instructions:

- Create a task
	- Set it's name, description and finally the most important thing acceptance 
	- Assign user to the task
	- Add tags if necessary
	- You can also set the planning fields however I don't think it makes sense in smaller projects
- Pick a task and change its State to Active - or move it to the appropriate column on the Board. If necessary add comments to discuss anything related the task. You can mention another member of the team there.
- In development section click create branch link and create branch with naming convention: 
	```
  <initials>/<initials of the task ex. US - user story>#<task number>_<task name in lower snace case>
	```
- Clone the branch with Visual Studio
- Code and commit it to repository
- Create pull request
- Set the task state to Resolved
- Review pull request
- Add and fix remarks from the review if they occur
- Approve the pull request, complete and merge it to the parent branch

#inbox/todo create video and screenshots

## Outcome:
By completing all the steps both the person who work on the task and his/hers supervisor will know on which stage the task is and what is going on in term of it's completion.

## 📖Further reading

---
Template: [[templates/knowledge_note_how_to]]