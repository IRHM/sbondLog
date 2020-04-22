---
title: Multi Line Text in Dialogs
date: 2018-10-15T07:44:19+01:00
description: "Multi Line Text in Dialogs"
categories:
  - ArmA3 Mission Editing
author: "sbondo1234"
---

{{< link-heading "What?" >}}

If you are creating a dialog and need to have a long line of text and it doesn't fit in your dialog frame, you are going to be happy to know that there is a style you can use to make your text go into multiple lines.

{{< link-heading "How?" >}}

In your dialog just add the following lines of code:

{{< highlight C >}}
style = 16;
lineSpacing = 1;
{{< /highlight >}}

Style 16 is for multiple lines. You can change the value 1 at the end of the lineSpacing, but if you have a small dialog then going over 2 will most likely break it and not show most of the text.

If you decide you don't like the box that appears around your text you can add this line of code and make it disappear:

{{< highlight C >}}style = 16 + 512; //Style 512 here removes the box.{{< /highlight >}}
