---
title: How To Solve CSS Not Updating In Your Browser
date: 2019-05-15T01:57:36+01:00
description: ""
categories:
  - WebDev
author: "sbondo1234"
---

{{< link-heading "What?" >}}

If you are having problems getting your browser to update CSS on your web page then this post will definitely help you. There are mainly two different methods I will be showing you.

{{< link-heading "Method 1 - Clearing Cache" >}}

If you ***press F12***, you now be able to ***right click on the refresh button*** and click the last option which is ***Empty Cache & Hard Reload.***

{{< link-heading "Method 2 - Query Strings" >}}

This method is barely used by me because normally the first method works. Only if the top method fails I will decide to do this.

This requires adding something which is known as a ***Query String*** to the end of the filename you used to link your style sheet.

When you are done it should look something like this:

{{< highlight HTML >}}
<link rel="stylesheet" href="styles.css?v=1"/>
{{< /highlight >}}

Every time you have a problem with your CSS not updating you can just update the number or change it to something random and your browser will be forced to update your CSS.
