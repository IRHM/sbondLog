---
title: Making .htaccess And .htpassword
date: 2019-04-27T10:11:57+01:00
description: ""
categories:
  - WebDev
author: "sbondo1234"
---

{{< link-heading "How?" >}}

**One thing to note is that .htaccess files do not have a file type. So always make sure when you are making this file that there should never be a file extension beside it.**

There are multiple ways of making this file and I'm going to be showing you two of them.

{{< link-heading "Way 1" >}}

In the first way, you can simply create a text document, open it up with any text editor then go to **file >> Save as**. When in the save as menu, click on **Save as** type, then change it to All types. Once it is changed to All types you can remove everything in the File name box and type in **.htaccess**. Do the same thing again, but instead make the **.htpassword**.

{{< link-heading "Way 2" >}}

NOTE: This is in Windows, If you are on any other platform I am sorry since I only use Windows. If you are not on Windows I am sure you can search this up and find your answer quite simply.

So first off you are going to want to open your Command Prompt by clicking your ⊞ Win key and then typing in cmd.

Once you are in CMD you are going to want to cd to the directory that you want your .ht file to be made in. Like the following:

{{<highlight Apache>}}
cd C:/xampp/htdocs
{{</highlight>}}

When you have told it where to look you can now tell it what file to make for you like such:

{{<highlight Apache>}}type nul > .htaccess{{</highlight>}}

Do this again but make the .htpassword file instead.

{{< link-heading "Done!" >}}

Once you have done one of the above methods to create your file, you are done!

If you are using XAMPP or are able to use windows explorer to view your file it should look like this:
