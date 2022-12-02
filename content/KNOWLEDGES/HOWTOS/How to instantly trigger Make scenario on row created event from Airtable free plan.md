---
title: "Untitled"
date:  2022-12-02
enableToc: true
openToc: true
tags: ["knowledge", "howto"]
type: knowledge-note
---

# How to instantly trigger Make scenario on row created event from Airtable free plan

## 🗒️Task:
This is a workaround since there is no straight forward way to trigger a Make scenario instantly on row created event on a free plan. On paid plan you can run script or use mailhook to address which is not one of the collaborators address.

## 🛠️Prerequisites (if applicable): 
- Gmail

## 📝Instructions:

1. Create mailhook in make and copy address
2. Add a forwarding address [Settings - Gmail (google.com)](https://mail.google.com/mail/u/3/#settings/fwdandpop) click button **Add a forwarding address**
   ![[ATTACHMENTS/Pasted image 20221202165500.png]]
3. Enter address copied in step 1 and click **Next**
   ![[ATTACHMENTS/Pasted image 20221202165602.png]]
4. Click **Proceed**
   ![[ATTACHMENTS/Pasted image 20221202165729.png]]
5. [Gmail] Click **OK**
   ![[ATTACHMENTS/Pasted image 20221202165759.png]]
6. [Gmail] Verify forwarding address - click **Re-send email**
   ![[ATTACHMENTS/Pasted image 20221202170021.png]]
7. [Make] Copy confirmation code
   ![[ATTACHMENTS/Pasted image 20221202170551.png]]
8. Enter confirmation number and click **Verify**
   ![[ATTACHMENTS/Pasted image 20221202170630.png]]
9. Create filter - click **create a filter!** link
![[ATTACHMENTS/Pasted image 20221202170735.png]]
10. Add filters and click **Create filter**
    ![[ATTACHMENTS/Pasted image 20221202171020.png]]
11. Set action - check **Forward it to** and select forwarding address you added few steps earlier and click **Create filter**
    ![[ATTACHMENTS/Pasted image 20221202171226.png]]
12. The forwarding rule should show up on the **Filters and Bloked Addresses**
    ![[ATTACHMENTS/Pasted image 20221202171517.png]]
13. Now you can create an automation in Airtable - add a trigger and add send email action and set the To, Subject and Message fields.
    ![[ATTACHMENTS/Pasted image 20221202171724.png]]
14. Now you can test it in **TEST STEP** by clicking **Run test**
    ![[ATTACHMENTS/Pasted image 20221202171934.png]]
15. You should receive the data in mailhook Make module
![[ATTACHMENTS/Pasted image 20221202172110.png]]

## Video
![[ATTACHMENTS/screen-recording-2022-12-02-17_42.webm]]

## Outcome:
You are able to receive instantly data from Airtable whenever specified trigger is hit. 

## 📖Further reading
[Process Airtable Rows Instantly—Using Airtable Automations and Integromat | by Micah Headdings | Medium](https://medium.com/@heymicahh/process-airtable-rows-instantly-using-airtable-automations-and-integromat-fb1738f976af)

---
Template: [[templates/knowledge_note_how_to]]