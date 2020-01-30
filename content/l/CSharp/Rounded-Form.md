---
title: Rounding The Edges Of Your Form C#
date: 2019-06-29T10:44:11+01:00
description: ""
categories:
  - CSharp
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Step 1 - The Importing" >}}

{{< highlight cs >}}
using System.Runtime.InteropServices;
using System.Drawing;
{{< /highlight >}}
Put this one inside of your class:
{{< highlight cs >}}
[DllImport("Gdi32.dll", EntryPoint = "CreateRoundRectRgn")]
private static extern IntPtr CreateRoundRectRgn
(
    int nLeftRect,     // x-coordinate of upper-left corner
    int nTopRect,      // y-coordinate of upper-left corner
    int nRightRect,    // x-coordinate of lower-right corner
    int nBottomRect,   // y-coordinate of lower-right corner
    int nWidthEllipse, // height of ellipse
    int nHeightEllipse // width of ellipse
);
{{< /highlight >}}

{{< link-heading "Step 2 - Rounding" >}}

I would put this in the initialisation of your form.
{{< highlight cs >}}
this.FormBorderStyle = FormBorderStyle.None; //<– if it isn’t already!
Region = Region.FromHrgn(CreateRoundRectRgn(0, 0, Width, Height, 20, 20));
{{< /highlight >}}

{{< link-heading "Done!" >}}

On this specific line:
{{< highlight cs >}}
this.FormBorderStyle = FormBorderStyle.None; //<-- if it isn't already!
Region = Region.FromHrgn(CreateRoundRectRgn(0, 0, Width, Height, 20, 20));
{{< /highlight >}}
You can change the last two numbers (20, 20) to change how smooth/hard the curve is.
