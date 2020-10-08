---
title: ArmA Dialog Creator
date: 2018-10-15T05:37:26+01:00
description: "Using ArmA Dialog Creator"
categories:
  - ArmA3 Mission Editing
author: "sbondo1234"
---

{{<link-heading "What Is This?">}}

<a href="https://github.com/kayler-renslow/arma-dialog-creator/releases" target="_blank" class="b bb bw pb1 no-underline black dim">ArmA Dialog Creator</a> is an amazing tool created by Kayler Renslow. It is the easy way of creating functional dialogs in ArmA 3. You can simply download it from his Github and install it. Once you have done that you are ready to start creating dialogs the easy way!

{{<link-heading "How To Start">}}

Once you have opened the .exe file you are greeted with some options that you need to set before you can start creating dialogs. You first need to choose a workspace and then make/open a project. Most of this program is very self-explanatory since it was made for ease of use.

When you are on the main page you can right click, create and then click new control. You can rename the control and then set what you want it to be ( e.g. Static, Button, etc ). You can also choose whether it will be a background control or not, I normally always have that ticked. Once created you can drag it around and re-size it. You can choose how big the snapping is by changing 'Step' at the top right. It is a bit buggy at the moment, but if you turn off Viewport Snapping then alt-tab out of the software and then back into it the snapping should be turned off.

You can now start editing your new control by double-clicking and changing what you want to be changed.

{{<link-heading "Exporting">}}

When you are ready to export your newly created dialog you can go to File, Export and then export preview. I normally don't change anything else since I will already have everything set in my .hpp file and only need the controls.

You can change everything then copy and paste the whole file into your dialog, but that isn't something I do. The easiest way for me to do it is to create a new .hpp file and set up everything as a template and then copy and paste the classes into the controls like such:


My .hpp File **before** copy and paste:

{{<highlight C>}}class DialogName{
  idd = 1000
  class controls{
  };
};
{{</highlight>}}

My .hpp File **after** copy and paste:

{{<highlight C>}}
class DialogName{
  idd = 1000
    class controls{
      class rsc_frame{
      Stuff = Stuff
      Stuff = Stuff
      Stuff = Stuff
      Stuff = Stuff
    };
    class rsc_frame_2{
      Stuff = Stuff
      Stuff = Stuff
      Stuff = Stuff
      Stuff = Stuff
    };
  };
};
{{</highlight>}}
