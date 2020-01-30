---
title: Populating Combo Boxes in C#
date: 2019-06-21T02:10:34+01:00
description: ""
categories:
  - CSharp
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Step 1 - Creating It" >}}

Of course the first step if to ***Create your combo box*** and assign it an appropriate ***Name***.

{{< link-heading "Step 2 - Adding Items" >}}

I put all of the things I wanted into a string array for easy accessibility and readability. My code is set out like this:

{{< highlight cs >}}
Categories = new string[9];
Categories[0] = "Action";
Categories[1] = "Adventure";
Categories[2] = "Comedy";
Categories[3] = "Crime";
Categories[4] = "Drama";
Categories[5] = "Horror";
Categories[6] = "Science fiction";
Categories[7] = "Thriller";
Categories[8] = "Western";
CategoryDropdown.Items.AddRange(Categories);
{{< /highlight >}}

The ***first*** line ***Categories = new string[9];*** is initialising the string array and declaring how many different variables or 'things' are going to be in it.

The ***2-10 lines*** are just adding the different words/variables into the string array.

The very ***last*** line adds every option in the string array into the combo box. Since we are adding it through a string array we need to use ***.AddRange*** otherwise we would have an error as it would only expect one input.
