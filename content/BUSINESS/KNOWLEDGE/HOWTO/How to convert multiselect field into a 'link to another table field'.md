---
title: "How to convert multiselect field into a 'link to another table field'"
date:  2022-09-05
enableToc: true
openToc: true
tags: ["knowledge", "make", "airtable"]
type: knowledge-note
---

# I had to convert a multiselect field into a “Link to another table”
I prepared a scenario in [[NOCODE/TOOLS/Make]] for this purpose
![[ATTACHMENTS/Pasted image 20220905171437.png]]
Blueprint can be downloaded here:
![[convert multiselect into link to another.json]]

I came up to a problem with updating an array field:
![[ATTACHMENTS/Pasted image 20220905171755.png]]
when Cliend_Services array was empty it is not returned in the response json and using add was not enough since add(null;id) returned null. I had to check if the array is empty using ifempty function and if so I used a predefined empty array (emptyarray) as a base array to add to. This way when the Client_Services array is empty the empty array is used and the result of the code below: 
```make
{{add(ifempty(2.Client_Services; emptyarray); 1.id)}}
```
is that the array contains only one element.