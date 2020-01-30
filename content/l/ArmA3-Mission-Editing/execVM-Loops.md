---
title: execVM Loops
date: 2018-10-13T07:24:40+01:00
description: "Simple loops using execVM."
categories:
  - ArmA3 Mission Editing
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Why Do It Like This?" >}}

You can use execVM to loop one script over an over again,
but you can't stop it once it has started. It is great when you
have a script you want to run every x seconds for the whole mission.
It is also really simple so it is more appealing over other ways of
creating a loop because it requires almost no effort.

This method for a loop can also be great whilst debugging.

{{< link-heading "How?" >}}

Say you have a script that creates a hint for everyone to see and you want the hint to display every 50 seconds you can simply follow what I have done below.

{{< highlight C >}}Hint "ArmA 4 Lyf";
sleep 50;
execVM "hint.sqf";
{{< /highlight >}}

{{< link-heading "What Is It Doing?" >}}

So the first line of code is creating a hint that reads "ArmA 4 Lyf". The second line makes the script stop and wait for 50 seconds before continuing and then the final line using execVM makes the whole script be run again, so essentially you have a script that creates a hint reading "ArmA 4 Lyf" every 50 seconds.
