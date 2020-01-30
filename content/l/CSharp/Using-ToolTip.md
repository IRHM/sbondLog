---
title: How To Show Info On Hover With ToolTip C#
date: 2019-06-29T12:26:11+01:00
description: ""
categories:
  - CSharp
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Step 1 - Add The Control" >}}

In the toolbox search for "ToolTip" and plop it onto your form. It isn't
something you put directly on your form, but instead it will just sit at the
bottom in a little box.

You can click on it and edit it's properties.

{{< link-heading "Step 2 - Add Info" >}}

Click on the control you want to display info about, and find
"ToolTip on < ToolTip Name >". In the box next to it you can type out the
information you want to display when someone hovers over it.

{{< link-heading "Change Colours (Optional)" >}}

 1. Click onto the **ToolTip** at the bottom and **change the colours** in the properties menu.
 2. Set **OwnerDraw**, in the same menu, to **True**.
 3. On the **ToolTip** go to events and make the **Draw** event.
 4. **Paste** the following into the event you just made:
{{< highlight cs >}}
 e.DrawBackground();
 e.DrawBorder(); // <-- can remove this line to remove border
 e.DrawText();
{{< /highlight >}}
