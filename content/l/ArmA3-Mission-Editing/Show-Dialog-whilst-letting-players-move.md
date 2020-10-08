---
title: Show Dialog & Let Players Move
date: 2018-11-05T08:30:50+01:00
description: ""
description: "Removing or Adding Items"
categories:
  - ArmA3 Mission Editing
author: "sbondo1234"
---

{{<link-heading "What?">}}

There is a way to show dialogs differently so that the player can retain his control over moving his character. The player can move around, but there will still be a mouse pointer on the screen allowing them to select what they need to. This can be useful in many ways in many different situations you may have.

{{<link-heading "How?">}}

To show dialogs in this way you will have to use the 'createDisplay' command.

This can be used like such:

{{<highlight C>}}findDisplay 46 createDisplay "dialogName";{{</highlight>}}
