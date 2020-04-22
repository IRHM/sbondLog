---
title: Make User Settings & Edit Them C#
date: 2019-07-18T01:09:49+01:00
description: ""
categories:
  - CSharp
author: "sbondo1234"
---

{{< link-heading "Step 1 - Create Settings" >}}

Right-click on your project and head down to **Properties** and then on the
left-click on the settings button.

Enter the **Name, type, scope & value** of each setting
you want to add.

**Note:** The **Application Scope** is not editable during runtime and will
always stay the default value you set right now.

{{< link-heading "- Setting Values To Settings Value" >}}

If you want to set, for example, the value of a variable to the same as a settings
value, you can do the following:

{{< highlight cs >}}
string Name = Properties.Settings.Default.SettingName
{{< /highlight >}}

{{< link-heading "- Changing Settings Value" >}}

You can change settings values in runtime (If you set the scope to user).
This can be achieved easily, by doing something simmilar to this:

{{< highlight cs >}}
Properties.Settings.Default.SettingName = "Some Value";
Properties.Settings.Default.Save(); // Save all edited settings
{{< /highlight>}}

If you don't include the last line in the example above, then the values edited
won't be saved!
