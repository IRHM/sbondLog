---
title: "Using Windows Characters on Custom Border C#"
date: 2019-06-27T00:58:27+01:00
description: ""
categories:
  - CSharp
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Step 1- Find Characters" >}}

Find and open **Character Map** in windows. In windows 10 you can just search 'character' in the start menu and you should find it.

Change the font to **'Marlett'** and you should see all the charcters that are commonly used in applications.

<center>![Char Map](https://ul.sbond.co/i/log/win/charmap.png "Character Map")</center>

From here you can just double click on the characters you want to use and then click the **Copy** button next to the textbox.

{{< link-heading "Step 1- Using Them" >}}

You can use these characters anywhere you want within your program (Buttons, Labels, etc), all you have to do is change the font to **'Marlet'** on whichever control you want to use them on.

<center>![Font Options](https://ul.sbond.co/i/log/win/fontctrl.png "Font Options")</center>

Of course with these being actual unicode characters you can change the font size and control their font style (Regular, Bold, etc).

{{< link-heading "Step 3 - Aligning (Optional)" >}}

Some charcters you'll use might behave weridly when put onto certain things, so to combat that, you can try one of the things below:

- Compatible Text Rendering - setting this option to **true** can sometimes help.<br>
![Font Options](https://ul.sbond.co/i/log/win/CompTxtRendering.png "Font Options")

- Text Align - tinker around with this if you are having issues.<br>
![Text Align](https://ul.sbond.co/i/log/win/txtalign.png "Text Align")
