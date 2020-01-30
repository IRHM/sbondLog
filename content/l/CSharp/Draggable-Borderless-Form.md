---
title: Making A Draggable, Borderless Form C#
date: 2019-06-27T02:17:12+01:00
description: ""
categories:
  - CSharp
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Step 1 - Adding Event" >}}

Go into the events of either the whole form or on a control/panel and add the **MouseDown** event.
<center>![MouseDown Event](https://ul.sbond.co/i/log/win/mousedownevent.png "MouseDown Event")</center>

{{< link-heading "Step 2 - Variables & Importing Namespace" >}}

Import the namespace:
{{< highlight cs >}}using System.Runtime.InteropServices;{{< /highlight >}}

Define the following:
{{< highlight cs >}}
public const int WM_NCLBUTTONDOWN = 0xA1;
public const int HT_CAPTION = 0x2;
[DllImportAttribute("user32.dll")]
public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);
[DllImportAttribute("user32.dll")]
public static extern bool ReleaseCapture();
{{< /highlight >}}

{{< link-heading "Step 3 - Make Event" >}}

Put the following lines of code inside of your event (**Change TopPanel_MouseDown to what you called your event above**):

{{< highlight cs >}}private void TopPanel_MouseDown(object sender, MouseEventArgs e)
{
    ReleaseCapture();
    SendMessage(this.Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);
}{{< /highlight >}}

{{< link-heading "Done! 🎉" >}}

Now when you click, hold and move your mouse on whatever you put this event on, your form will move!
